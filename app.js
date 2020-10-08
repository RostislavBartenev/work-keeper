const express = require('express');
const http = require('http')
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
const cors = require('cors');


const dbConnect = require('./db/dbConnect');
const userRouter = require('./routes/userRouter');


dbConnect();

require('dotenv').config();
const path = require('path');


app.set('port', process.env.PORT || 3006);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);

const users = {};

const socketToRoom = {};

io.on('connection', socket => {
  socket.on("join room", roomID => {
    if (users[roomID]) {
      const length = users[roomID].length;
      if (length === 4) {
        socket.emit("room full");
        return;
      }
      users[roomID].push(socket.id);
    } else {
      users[roomID] = [socket.id];
    }
    socketToRoom[socket.id] = roomID;
    const usersInThisRoom = users[roomID].filter(id => id !== socket.id);

    socket.emit("all users", usersInThisRoom);
  });

  socket.on("disconnect", () => {
    console.log('disconnect')
    socket.broadcast.emit("user left");
    delete users[socket.id]
  })


  socket.on("sending signal", payload => {
    io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID });
  });

  socket.on("returning signal", payload => {
    io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id });
  });

});

if (process.env.PROD) {
  app.use(express.static(path.join(__dirname, './frontend/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'))
  })
}

server.listen(app.locals.settings.port, () => {
  console.log('Server started on port ' + app.locals.settings.port);
})


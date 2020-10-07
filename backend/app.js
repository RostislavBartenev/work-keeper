const express = require('express');
const http = require('http')
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

require('dotenv').config();
const path = require('path');

const videoChatRouter = require('./src/routes/videoChat/index');


app.set('port', process.env.PORT || 3006);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

  const rooms = {};

  io.on("connection", socket => {
    socket.on("join room", roomID => {
      if (rooms[roomID]) {
        rooms[roomID].push(socket.id);
      } else {
        rooms[roomID] = [socket.id];
      }
      const otherUser = rooms[roomID].find(id => id !== socket.id);
      if (otherUser) {
        socket.emit("other user", otherUser);
        socket.to(otherUser).emit("user joined", socket.id);
      }
    });

    socket.on("offer", payload => {
      io.to(payload.target).emit("offer", payload);
    });

    socket.on("answer", payload => {
      io.to(payload.target).emit("answer", payload);
    });

    socket.on("ice-candidate", incoming => {
      io.to(incoming.target).emit("ice-candidate", incoming.candidate);
    });
  });

server.listen(app.locals.settings.port, () => {
  console.log('Server started on port ' + app.locals.settings.port);
})


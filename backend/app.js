const express = require('express');
const http = require('http')
const app = express();
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);

require('dotenv').config();
const path = require('path');
const cors = require('cors')

const videoChatRouter = require('./src/routes/videoChat/index');


app.set('port', process.env.PORT || 3006);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/videochat', videoChatRouter);

server.listen(app.locals.settings.port, () => {
  console.log('Server started on port ' + app.locals.settings.port);
})


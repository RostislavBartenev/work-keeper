const express = require('express');
const router = express.Router();

const server = require('../../../app.js')

const socket = require('socket.io');
const io = socket(server);


router.get('/', (req, res) => {

  console.log(1)

  // const rooms = {}
  //
  // io.on('connection', socket => {
  //   socket.on('join room', roomID => {
  //     if (rooms[roomID]) {
  //       rooms[roomID].push(socket.id)
  //     } else {
  //       rooms[roomID] = [socket.id]
  //     }
  //
  //     const otherUser = rooms[roomID].find(id => id !== socket.id)
  //     if (otherUser) {
  //       socket.emit('other user', otherUser);
  //       socket.to(otherUser).emit('user joined', socket.id)
  //     }
  //   })
  //
  //   socket.on('offer', payload => { // пользователь А звонит Б с оффером
  //     io.to(payload.target).emit('offer', payload)
  //     // в payload отправляется два параметра: * кто я (ID) * еще какая инфа, необходимая для webRTC
  //   })
  //
  //   socket.on('answer', payload => { // пользователь Б отвечает А
  //     io.to(payload.target).emit('answer', payload)
  //   })
  //
  //   socket.on('ice-candidate', incoming => {
  //     io.to(incoming.target).emit('ice-candidate', incoming.payload)
  //     // Все данные передаются в виде текста и делятся на два типа – SDP и Ice Candidate.
  //     // Первый тип используется для установления логического соединения, а второй для физического.
  //   })
  //
  // })

  // res.json({ message: 'Go' })
})


// router.get('/:id', (req, res) => {
//     res.json({message: 'Go'})
// })

module.exports = router;

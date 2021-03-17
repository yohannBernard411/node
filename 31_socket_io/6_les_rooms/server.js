const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const app = express();
const server = app.listen(4001);

app.use(express.static(__dirname, { index: false }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const ios = socketio(server);
const admin = ios.of('/admin');

ios.on('connect', (socket) => {
  console.log('Connected on /');
  socket.on('message', (msg) => {
    console.log(msg);
  });
  socket.join('my room'); // joindre la room
  //socket.leave('my room');  // quiter la room
  ios.to('my room').emit('message', 'message pour my room');
  socket.to('my room').emit('message', 'message pour my room');

});

admin.on('connect', (socket) => {
  console.log('Connected on admin');
  socket.on('message', (msg) => {
    console.log(msg);
  });
  socket.on('joinRoom', (room) => {
    socket.join(room);
  })
});

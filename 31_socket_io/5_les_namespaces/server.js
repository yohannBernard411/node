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
  ios.emit();
});

admin.on('connect', (socket) => {
  console.log('Connected on admin');
  socket.on('message', (msg) => {
    console.log(msg);
  });
  admin.emit();
});

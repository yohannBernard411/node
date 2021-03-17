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

ios.on('connect', (socket) => {
  console.log('New connection');
  socket.on('message', (msg) => {
    console.log(msg);
  })
})

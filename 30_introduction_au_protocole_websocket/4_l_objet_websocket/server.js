const express = require('express');
const app = express();
const path = require('path');
const ws = require('ws');

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = app.listen(4001);

const wss = new ws.Server({ server });

console.log(wss.address());
console.log(wss.clients);

wss.on('connection', (socket, req) => {
  console.log('A socket is now connected');
  socket.on('message', (msg) => {
    console.log(msg);
  })
  socket.send('Hello welcome');
});

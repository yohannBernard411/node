const express = require('express');
const app = express();
const path = require('path');
const ws = require('ws');
const fs = require('fs');

const image = fs.readFileSync('./why2.png');

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = app.listen(4001);

const wss = new ws.Server({ server });

console.log(wss.address());
console.log(wss.clients);

wss.on('connection', (socket, req) => {
  socket.send(image, { binary: true });
});

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
    const clients = wss.clients;
    clients.forEach((client) => {
      if (client !== socket && client.readyState === ws.OPEN) {
        client.send(msg);
      }
    });
  })

  setInterval( () => {
    socket.ping('ping', false, () => {
      console.log('ping parti');
    });
  }, 1000);
  socket.on('pong', (msg) => {
    console.log('Pong retourné: ', msg.toString('utf-8'));
  })

});

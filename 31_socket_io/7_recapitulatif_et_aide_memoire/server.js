const express = require("express");
const path = require("path");
const socketio = require("socket.io");
const app = express();
const server = app.listen(4001);

app.use(express.static(__dirname, { index: false }));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const ios = socketio(server);
const admin = ios.of("/admin");

// ios.use((socket, next) => {
//   if (!socket.handshake.query.token) {
//     next(new Error("no token"));
//   } else {
//     next();
//   }
// });

ios.on("connect", (socket) => {
  socket.on("message", (msg) => {
    console.log(msg);
  });
});

admin.on("connect", (socket) => {
  // Get all clients connected to namespace /admin
  admin.clients((error, clients) => {
    console.log(clients);
  });

  // Get all clients connected to room 'room' in namespace '/admin'
  admin.to("room").clients((err, clients) => console.log(clients));

  // Emit to all namespace's sockets
  admin.emit("message", "un message");

  // Emit to all sockets connected in room in namespace '/admin'
  admin.to("room").emit("message", "un message");
  admin.in("room").emit("message", "un message");

  // Emit to socket's room
  admin.to(socket.id).emit("message", "un message");

  // Emit to socket client
  socket.emit("message", "un message");

  // Emit to all sockets in room 'room' except sender
  socket.to("room").emit("message", "un message");

  // Emit to all sockets in namespace except sender
  socket.broadcast.emit("message", "un message");

  // Emit compress message to client socket
  socket.compress(true).emit("message", "un message");

  // Emit a message which could be dropped
  socket.volatile.emit("message", "un message");

  // Emit a binary message
  socket.binary(true).emit("message", "un message");
});
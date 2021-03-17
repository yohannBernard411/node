const socket = io('localhost:4001');

socket.on('connect', () => {
  socket.emit('message', 'salut');
  // socket.binary(true).emit('hello', new Blob());
});

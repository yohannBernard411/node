const socket = io('localhost:4001');

socket.on('connect', () => {
  console.log('We are connected');
});

console.log(socket);

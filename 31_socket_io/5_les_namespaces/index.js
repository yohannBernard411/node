const socket = io('localhost:4001');
const admin = io('/admin');

socket.on('connect', () => {
  console.log('Connected on /');
  console.log(socket);
});

admin.on('connect', (socket) => {
  console.log('Connected on /admin');
  admin.emit('message', 'Hello youuuuu');
  console.log(admin);
});

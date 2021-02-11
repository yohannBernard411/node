const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('got a request');
  res.end();
});

server.listen(8080);

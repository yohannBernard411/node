const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  // console.log(req);
  res.writeHead(200, {
    'content-type': 'text/plain'
  })
  res.end('got a response');
});

server.listen(8080);

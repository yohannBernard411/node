const http = require('http');
const fs = require('fs');
const server = http.createServer();

/* essai avec template */

server.on('request', (req, res) => {
  // console.log(req);
  res.writeHead(200, {
    'content-type': 'text/html'
  })

  const fileContent = fs.readFileSync('./index.html', 'utf8');
  const template = fileContent.replace('{{ name }}', 'WORLD');
  res.end(template);
});

server.listen(8080);

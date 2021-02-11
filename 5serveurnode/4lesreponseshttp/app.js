const http = require('http');

const server = http.createServer();

/* essai avec html */

server.on('request', (req, res) => {
  // console.log(req);
  res.writeHead(200, {
    'content-type': 'text/html'
  })
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Premiere Page html</title>
  </head>
  <body>
    <h1>Helllo world! </h1>
  </body>
  </html>
  `);
});

/* essai avec json */

server.on('request', (req, res) => {
  // console.log(req);
  res.writeHead(200, {
    'content-type': 'application/json'
  })

  const obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4'
  }
  res.end(JSON.stringify(obj));
});

server.listen(8080);

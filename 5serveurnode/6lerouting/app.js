const http = require('http');
const fs = require('fs');
const server = http.createServer();

/* essai avec template */

server.on('request', (req, res) => {
  // console.log(req);
  

  const url = req.url;
  let fileContent;
  if (url==='/index'){
    res.writeHead(200, {
      'content-type': 'text/html'
    })
    fileContent = fs.readFileSync('./index.html', 'utf8');
  }else if (url==='/info'){
    res.writeHead(200, {
      'content-type': 'text/html'
    })
    fileContent = fs.readFileSync('./info.html', 'utf8');
  }else{
    res.writeHead(404, {
      'content-type': 'text/html'
    })
    fileContent = fs.readFileSync('./not-found.html', 'utf8');
  }

  
  res.end(fileContent);
});

server.listen(8080);

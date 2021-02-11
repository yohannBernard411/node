const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.writeHead(200, {
    'content-type': 'text/plain'
  });
  res.end('Hello world***');
})

app.listen(3000);

const express = require('express');
const app = express();
const path = require('path');

//set les headers avec express:

app.get('/', (req, res) => {
  res.set('content-type', 'text/plain');
  res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body><h1>mon titre</h1><p>mon paragraphe</p></body></html>');
})

//set plusieurs elements de headers avec express:

app.get('/', (req, res) => {
  res.set({
    'content-type': 'text/plain',
    'x-my-header': '123'
  });
  res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body><h1>mon titre</h1><p>mon paragraphe</p></body></html>');
})

// set un element de headers apres le set avec express:

app.get('/', (req, res) => {
  res.set({
    'content-type': 'text/html',
    'x-my-header': '123'
  });
  res.append('x-header-2', '67879');
  res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body><h1>mon titre</h1><p>mon paragraphe</p></body></html>');
})

//set un status de headers:

app.get('/', (req, res) => {
  res.status(404);
  res.set({
    'content-type': 'text/html',
    'x-my-header': '123'
  });
  res.append('x-header-2', '67879');
  res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body><h1>mon titre</h1><p>mon paragraphe</p></body></html>');
})

app.listen(3000);

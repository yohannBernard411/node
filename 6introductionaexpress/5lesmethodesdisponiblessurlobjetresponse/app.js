const express = require('express');
const app = express();
const path = require('path');

// pour du html (par default)

app.get('/', (req, res) => {
  res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>page html</title></head><body><h1>mon titre</h1><p>mon parageaphe</p></body></html>');
})

// pour un objet (detecte automatiquement le json!)

app.get('/', (req, res) => {
  res.send({key1: "value1", key2: "value2", key3: "value3"});
})

// on peut aussi lui signaler qu'il s'agit d'un json:

app.get('/', (req, res) => {
  res.json({key1: "value1", key2: "value2", key3: "value3"});
})

// pour un array (detecté et interprété comme un json!)

app.get('/', (req, res) => {
  res.send(["value1", "value2", "value3"]);
})

// pour le status (par exemple 500=> Internal Server Error)

app.get('/', (req, res) => {
  res.sendStatus(500);
})

// liste des codes http:
// 1xx -> information
// 2xx -> succés
// 3xx -> redirection
// 4xx -> erreur du client web
// 5xx -> erreur du serveur/serveur d'application

//renvoyer un fichier simplement:

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

//renvoyer un fichier avec des options:

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), {
    headers: {
      'content-type': 'text/html'
    }
  });
})

//renvoyer un fichier avec des options et fonction de callback:

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), {
    headers: {
      'content-type': 'text/html'
    }
  }, (err) => {
    if (err){
      res.sendStatus(500);
    }
  });
})

app.listen(3000);

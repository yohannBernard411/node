const express = require('express');
const app = express();
const path = require('path');
const ws = require('ws');

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = app.listen(4001);

const wss = new ws.Server({ server: server });
// on peutegalement stipuler un port:
// const wss = new ws.Server({ port: 4000 });
// ou avec un host:
// const wss = new ws.Server({ host: 'localhost', port: 4000 });
// liste des options:
// backlog => nombre de connection en attente
// clientTracking => stock les clients dans wss
// handleProtocols => pour definir des sous protocols
// maxPayload => taille maxi des fichiers entrants
// noServer => pour creer un server mais qui ne sera binder a aucun serveur
// path => pour indiquer un path sur lequel l'utilisateur peut se connecter
// perMessageDeflete => mecanisme de compression
// verifyClient => DEPRECATED controle avant de passer en websocket


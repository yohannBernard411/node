const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

// morgan token necessaire pour creer ses propres affichages
morgan.token('id', function getId (req) {
  return req.id
})


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// attention app.use() si pas de path indiqué, ce sera '/' par default
app.use('/', express.static(path.join(__dirname, '/public')));
app.use(express.json());// pour les json
app.use(express.urlencoded(({ extended: true }))); // pour les formulaires
// app.use(morgan('combined')); // pour utiliser les affichages deja existants
app.use(morgan(':date :http-version :method :referrer :remote-addr')); // pour creer ses propres affichages

app.get('/', (req, res) => {
  res.render('index');
})

// app.post('/', (req, res) => {
//   let body = '';
//   req.on('data', (data) => {
//     body += data;
//   })
//   req.on('end', () => {
//     console.log(body);
//     console.log(typeof(body));
//   })
//   res.render('index');
// })

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(typeof(req.body));
  console.log('afficher direct la value:');
  console.log(req.body.name);
  res.render('index');
})

app.listen(3000);

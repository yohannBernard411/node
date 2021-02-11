const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// attention app.use() si pas de path indiqué, ce sera '/' par default
app.use('/', express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded(({ extended: true })));
app.use(morgan('tiny'));

// app.get('/food?', (req, res) => { // le ? permet de matcher avec foo et food
//   console.log('match');
//   res.end();
// })

// app.get('/food+', (req, res) => { // le + permet de matcher de food à foodddddddddddddddddddddddddd
//   console.log('match');
//   res.end();
// })

// app.get('/food*', (req, res) => { // le * permet de matcher food et n'importe quels caractéres apres (foodazertyuio)
//     console.log('match');
//     res.end();
//   })

// app.get('/f(oo)?d', (req, res) => { // le () permet d'appliquer le multiplicateur a un groupe.
//     console.log('match');
//     res.end();
//   })

// app.get(/\/[mt]oto/, (req, res) => { // pour matcher directement avec une regexp (ici moto ou toto)
//   console.log('match');
//   res.end();
// })

app.get(['/foo', '/bar', '/yohann'], (req, res) => { // pour matcher differentes valeur dans un array
  console.log('match');
  res.end();
})

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(3000);

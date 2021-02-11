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

// app.param('userId', (req, res, next, value, name) => { // permet de trigger la middleware a chaque fois qu'un certain
//   console.log({name, value});                           // params est present dans l'url
//   next();
// })

app.param('userId', (req, res, next, value, name) => { // permet de trigger la middleware a chaque fois qu'un certain
  const user = {
    name: 'yohann',
    age: 39
  }                           // params est present dans l'url
  req.user = user;
  next();
})

// app.get('/user/:userId', (req, res) => {
//   console.log(req.params);
//   res.end();
// })

// app.get('/user/:userId/:compagnyId', (req, res) => {
//   console.log(req.params);
//   res.end();
// })

app.get('/user/:userId/:compagnyId', (req, res) => {
  console.log(req.user);
  res.end();
})

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(3000);

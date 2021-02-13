const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const multer = require('multer');
const util = require('util');
require('./database');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.render('index');
})

app.post('/file', (req, res) => {
  console.log(req.body);
  res.end();
})

app.use((err, req, res, next) => {
  console.log(util.inspect(err, { compact: false, depth: 5, breakLength: 80, color: true }));
  res.status(500).redirect('/');
})

app.listen(3000);

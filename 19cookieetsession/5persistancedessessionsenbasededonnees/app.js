const path = require('path');
const express = require('express');
require('./database');
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'trois petits chats',
  resave: false,
  name: 'jeSuisUnId',
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 14 // => 14 jours puisque en millisecondes!
  },
  store: new mongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 60 * 60 * 24 * 14 // => 14 jours puisque en secondes!
  })
}));

app.get('/', (req, res) => {
  console.log(req.session.id);
  if(req.session.views){
    req.session.views += 1;
  }else{
    req.session.views = 1;
  }
  console.log(req.session.views);
  res.render('index');
});

app.listen(3000);

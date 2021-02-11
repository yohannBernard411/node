const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const { app } = require('../app');

app.use(session({
  secret: 'trois petits chats',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 14
  },
  store: new mongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 60 * 60 * 24 * 14
  })
}));
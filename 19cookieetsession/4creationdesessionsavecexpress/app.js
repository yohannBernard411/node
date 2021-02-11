const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();
const cookieParser = require('cookie-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser('trois petits chats'));
app.use(session({
  secret: 'trois petits chats',
  resave: false,
  name: 'jeSuisUnId',
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 123456789
    //il vaut mieux utiliser l option maxAge que expires!!!
    // il ne faut pas utiliser le store (memoryStore) en production!!!
  }
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

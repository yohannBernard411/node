const path = require('path');
const express = require('express');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/* ordre des middleware
const getCurrentUser = (req, res, next) => {
  req.user = {
    name: 'Toto',
    authenticated: true
  }
  next();
  //attention sans le next(), il ne passe pas au middleware suivant!!!!
}

const isAuthenticated = (req, res, next) => {
  if (req.user.authenticated){
    console.log('User ok!');
  } else {
    console.log('User not authenticated!');
  }
  next();
}

//ordre des middlewares:
// Mauvais ordre:
// app.use('/foo', isAuthenticated, getCurrentUser);
//Bon ordre:
app.use('/foo', getCurrentUser, isAuthenticated);
*/

/* Avec condition
const getCurrentUser = (req, res, next) => {
  req.user = {
    name: 'Toto',
    authenticated: false
  }
  next();
  //attention sans le next(), il ne passe pas au middleware suivant!!!!
}

const isAuthenticated = (req, res, next) => {
  if (req.user.authenticated){
    console.log('User ok!');
    next();
  } else {
    res.sendStatus(403);
  }
  
}

app.use('/foo', getCurrentUser, isAuthenticated);

*/

const getCurrentUser = (req, res, next) => {
  req.user = {
    name: 'Toto',
    authenticated: false
  }
  next();
  //attention sans le next(), il ne passe pas au middleware suivant!!!!
}

const isAuthenticated = (req, res, next) => {
  if (req.user.authenticated){
    console.log('User ok!');
    next();
  } else {
    next('route'); // fais passer à la route suivante sans executer les autres middlewares
  }
  
}

app.use('/foo', getCurrentUser, isAuthenticated);

app.get('/foo',getCurrentUser, isAuthenticated, (req, res) => {
  res.render('index');
})

app.get('/foo', (req, res) => {
  res.sendStatus(403);
})

app.listen(3000);

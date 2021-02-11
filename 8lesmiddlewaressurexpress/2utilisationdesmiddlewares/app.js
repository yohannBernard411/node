const path = require('path');
const express = require('express');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const middleware1 = (req, res, next) => {
  console.log('middleware1');
  next();
  //attention sans le next(), il ne passe pas au middleware suivant!!!!
}

const middleware2 = (req, res, next) => {
  console.log('middleware2');
  next();
}

//notre middleware:
app.use('/foo', middleware1, middleware2);

app.get('/foo', (req, res) => {
  res.render('index');
})

app.listen(3000);

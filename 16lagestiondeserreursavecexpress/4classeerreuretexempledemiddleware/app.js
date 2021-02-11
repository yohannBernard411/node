const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
require('./database');
const routing = require('./routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded(({ extended: true })));
app.use(morgan('tiny'));

app.use(routing);

app.use(( err, req, res, next) => {
  const env = process.env.NODE_ENV;
  if(env === 'production'){
    res.status(500).render('error', {
      error: {
        code: err.code || 500,
        message: err.message
      }
    });
  }else{
    res.status(500).render('error', {
      error: {
        code: err.code || 500,
        message: err.message,
        stack: err.stack
      }
    })
  }
})

app.listen(3000);
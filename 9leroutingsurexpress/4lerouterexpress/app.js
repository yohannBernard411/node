const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const api = require('./routes/api');
const index = require('./routes/index');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// attention app.use() si pas de path indiqué, ce sera '/' par default
app.use('/', express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded(({ extended: true })));
app.use(morgan('tiny'));

app.use('/api', api); // renvoi tout ce qui a /api vers api
app.use(index);       // renvoi tout le reste vers index

app.listen(3000);

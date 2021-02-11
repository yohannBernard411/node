const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
require('./database');
const api = require('./routes/api');
const index = require('./routes/index');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded(({ extended: true })));
app.use(morgan('tiny'));

app.use('/api', api);
app.use(index);

app.listen(3000);

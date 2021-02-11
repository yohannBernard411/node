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

// app.route('/user/:userId', (req, res) => {
//   //middleware qui va s'appliquer à tous les verbes
// })
//    .get((req, res) => {
//      //middleware de get
//      res.send('user');
//    })
//    .put((req, res) => {
//      // middleware de put
//     res.send('user');
//   })
//   .delete((req, res) => {
//     // middleware de delete
//     res.send('user');
//   })

app.all('/user', (req, res) => {
  res.end();
})

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(3000);

const path = require('path');
const express = require('express');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', express.static(path.join(__dirname, '/public')));
app.use(express.json());// pour les json
app.use(express.urlencoded(({ extended: true }))); // pour les formulaires

app.get('/', (req, res) => {
  res.render('index');
})

// app.post('/', (req, res) => {
//   let body = '';
//   req.on('data', (data) => {
//     body += data;
//   })
//   req.on('end', () => {
//     console.log(body);
//     console.log(typeof(body));
//   })
//   res.render('index');
// })

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(typeof(req.body));
  console.log('afficher direct la value:');
  console.log(req.body.name);
  res.render('index');
})

app.listen(3000);

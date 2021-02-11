const path = require('path');
const express = require('express');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    name: 'Yohann',
    firstname: '<span>Bernard</span>',
    authenticated: true,
    products: [
      { title: 'product1', content: 'content1'},
      { title: 'product2', content: 'content2'},
      { title: 'product3', content: 'content3'},
      { title: 'product4', content: 'content4'},
      { title: 'product5', content: 'content5'}
    ]
  });
})

app.listen(3000);

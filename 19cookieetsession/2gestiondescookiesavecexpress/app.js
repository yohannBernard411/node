const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser('trois petits chats')); // string => pour signature du cookie!

app.get('/', (req, res) => {
  // res.cookie('deux', '456');
  // console.log(req.headers.cookie);

  // res.cookie('trois', '789', {
  //   domain: 'dyma.fr', // permet de set le cookie uniquement sur un sous domaine particulier
  //   path: '/admin', // permet de set le cookie uniquement sur un path particulier
  //   httpOnly: true, // permet de cacher le cookie au javascript du client (donnees sensibles)
  //   secure: true // ne set le cookie que si le site est en httpS
  //   expires: definir la durre de vie du cookie en temps gmt
  //   maxAge: definir le temps apres lequel le cookie expire (en millisecondes)
  // })

  // res.cookie('signedCookie', 'bachibouzouc', {
  //   signed: true
  // })

  // console.log(req.signedCookies);

  // console.log(req.cookies);

  //pour supprimer une key d un cookie:
  res.clearCookie('test');
  // attention: il faut passer les memes options a clearCookie qu a res.cookie sinon le cookie
  // ne sera pas efface!

  res.render('index');
});

app.listen(3000);

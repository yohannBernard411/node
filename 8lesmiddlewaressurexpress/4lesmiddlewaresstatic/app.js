const path = require('path');
const express = require('express');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// retourner l'image juste pour test (ne pas faire ca! utiliser static!!!)
// app.get('/public/images/image.jpeg', (req, res) => {
//   res.sendFile(path.join(__dirname, '/public/images/image.jpg'));
// })

//express.static va chercher dans le dossier public des que l'on va demander un fichier!
app.use('/', express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(3000);

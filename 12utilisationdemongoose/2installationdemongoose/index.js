const mongoose = require('mongoose');

// connection: 'mongodb://userName:motDePasse@localhost:port/NomDeLaDb'
mongoose.connect('mongodb://yohann:Guitare512$@localhost:27017/dyma', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
 }).then( () => {
   console.log('Connection OK!');
 }).catch( (err) => {
   console.log(err);
 })

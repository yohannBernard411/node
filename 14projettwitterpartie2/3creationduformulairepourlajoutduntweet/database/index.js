const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yohann:Guitare512$@cluster0.rhesi.mongodb.net/twitter?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
        .then( () => {
          console.log('Connection DB twitter ok!');
        })
        .catch( (err) => {
          console.log(err);
        })

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yohann:Guitare512$@cluster0.rhesi.mongodb.net/chat?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then( () => {
  console.log('Connection ok!');
}).catch( (err) => {
  console.log(err);
})

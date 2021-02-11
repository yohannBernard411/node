const mongoose = require('mongoose');
const schema = mongoose.Schema;

const chapterSchema = schema({
  title: String,
  nbrOfLessons: Number,
  index: Number,
  active: Boolean,
  infos: { type: {}, default: { author: 'Nathalie' } }
}, {
  timestamps: true
})

// sur le schema avant de creer le model, on peut ajouter des statics (methodes applicables au documents)
chapterSchema.statics.findByTitle = function(title, cb) {
  return Chapters.findOne( { title }, cb);
}

// sur le schema avant de creer le model, on peut ajouter des methods
chapterSchema.methods.displayClassy = function() {
  return `${ this.index } : ${ this.title }`;
}

const Chapters = mongoose.model('chapters', chapterSchema);

mongoose.connect('mongodb://yohann:Guitare512$@localhost:27017/dyma', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
 }).then( () => {
  console.log('Connection OK!');

  Chapters.findByTitle('ReactNative').exec().then( (document) => {
    console.log(document.displayClassy());
  })

 }).catch( (err) => {
   console.log(err);
 })

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const chapterSchema = schema({
  //ajouter un index sur un field permet d'avoir une querie sur ce field beaucoup plus
  // rapide, en revanche la creation de ce field pour un document est plus lent, il ne devra
  // donc etre set à true uniquement sur les field sur lesquels on va faire beaucoup de
  // queries!!
  title: { type: String, index: true },
  nbrOfLessons: Number,
  index: Number,
  active: Boolean,
  infos: { type: {}, default: { author: 'Nathalie' } }
}, {
  timestamps: true
})

//on peut egalement ajouter l index sur le field en dehors du schema:
// chapterSchema.index({ title: 1 });

// sur le schema avant de creer le model, on peut ajouter des statics (methodes applicables au documents)
chapterSchema.statics.findByTitle = function(title, cb) {
  return Chapters.findOne( { title }, cb);
}

// on va pouvoir creer des virtuals, qui sont des field que l on peut appeler alors qu'il ne sont
// pas enregistres! par exemple si on a un field firstName et un field lastName, on pourra creer un
// virtual fullName qui ne sera pas un field mais qui pourra etre appelé sur le document et qui 
// renverra firstName + lastName:
chapterSchema.virtual('titleindex').get(function() {
  return `${ this.index } : ${ this.title }`;
})
// on pourrait egalement definir un comportement grace à .set()

const Chapters = mongoose.model('chapters', chapterSchema);

mongoose.connect('mongodb://yohann:Guitare512$@localhost:27017/dyma', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
 }).then( () => {
  console.log('Connection OK!');

  // const newChapter = new Chapters({
  //   title: 'Abricot',
  //   nbrOfLessons: 10,
  //   active: true
  // })

  // newChapter.save();

  Chapters.findByTitle('ReactNative').exec().then( (document) => {
    console.log(document.titleindex);
  })

 }).catch( (err) => {
   console.log(err);
 })

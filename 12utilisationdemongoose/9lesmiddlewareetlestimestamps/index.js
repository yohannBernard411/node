const mongoose = require('mongoose');
const schema = mongoose.Schema;

const lessonSchema = schema({
  title: String,
  chapter: { type: schema.ObjectId, ref: 'chapters' }
});

const Lessons = mongoose.model('lessons', lessonSchema);

const chapterSchema = schema({
  title: String,
  nbrOfLessons: Number,
  index: Number,
  active: Boolean,
  infos: { type: {}, default: { author: 'Nathalie' } }
}, {
  timestamps: true // permet d'ajouter le timestamp (created_at et updated_at) au document lors de la création
})

// pour par exemple que le field index s'incremente a chaque nouveau chapter et que l on ne soit pas 
// oblige de le faire manuellement, on va pouvoir creer des hooks, ces hooks vont réagir à des events (eventListener)
// comme par exemple validate() ou save():
// "pre" s'execute avant l'event, "post" s execute apres l event
//l element "next" signale a mongoose de passer à la suite! mais on peut également lui soumettre une promesse
// liste des listener à cette adresse:
// https://mongoosejs.com/docs/middleware.html

chapterSchema.pre('validate', function(next){
  console.log('pre-validate');
  next();
})
chapterSchema.post('validate', function(doc, next){
  console.log('post-validate');

  //ici comme on finit par une promesse (exec()), on va directement return cette promesse et 
  // ne pas utiliser le next() à la fin!
  return Chapters.countDocuments().exec().then( (nbr) => {
    doc.index = nbr + 1;
  })

})
chapterSchema.pre('save', function(next){
  console.log('pre-save');
  next();
})
chapterSchema.post('save', function(){
  console.log('post-save');
  Chapters.findOne({}).sort({ _id : -1 }).exec().then( (lastDoc) => {
    console.log(lastDoc);
  })
})

const Chapters = mongoose.model('chapters', chapterSchema);

mongoose.connect('mongodb://yohann:Guitare512$@localhost:27017/dyma', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
 }).then( () => {
  console.log('Connection OK!');

  const newChapter = new Chapters({
    title: 'ReactNative',
    nbrOfLessons: 12,
    active: true
  })

  newChapter.save();

 }).catch( (err) => {
   console.log(err);
 })

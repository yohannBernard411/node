const mongoose = require('mongoose');
const schema = mongoose.Schema;

const chapterSchema = schema({
  title: { type: String, index: true },
  nbrOfLessons: Number,
  index: Number,
  active: Boolean,
  infos: { type: {}, default: { author: 'Nathalie' } }
}, {
  timestamps: true
})

const Chapters = mongoose.model('chapters', chapterSchema);

// mongoose.connect('mongodb://yohann:Guitare512$@localhost:27017/dyma', { 
mongoose.connect('mongodb+srv://yohann:Guitare512$@cluster0.rhesi.mongodb.net/dyma?retryWrites=true&w=majority', { 

  useNewUrlParser: true,
  useUnifiedTopology: true
 }).then( () => {
  console.log('Connection OK!');

  newChapter = new Chapters({
    title: 'dbDeux',
    nbrOfLessons: 23,
    index: 6,
    active: false
  })

  newChapter.save();

  Chapters.findOne({}).exec().then( (chapter) => {
    console.log('+++++++++++++++');
    console.log(chapter);
    console.log('+++++++++++++++');
  }).catch( (err) => {
    console.log(err);
  })

 }).catch( (err) => {
   console.log(err);
 })

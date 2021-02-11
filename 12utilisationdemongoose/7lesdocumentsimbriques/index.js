const mongoose = require('mongoose');
const schema = mongoose.Schema;

const lessonSchema = schema({
  title: String
}, {
  _id: true // est a true par defaut, mais on peut le set à false si on ne veut pas d'id!
})

const chapterSchema = schema({
  title: String,
  nbrOfLessons: Number,
  index: Number,
  active: Boolean,
  infos: { type: {}, default: { author: 'Nathalie' } },
  lessons: { type: [lessonSchema] }
})

const Chapters = mongoose.model('chapters', chapterSchema);

mongoose.connect('mongodb://yohann:Guitare512$@localhost:27017/dyma', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
 }).then( () => {
  console.log('Connection OK!');

  // Chapters.findOne({})
  // .exec()
  // .then( (chapter) => {
  //   const newLesson = {
  //     title: 'introduction'
  //   }
  //   chapter.lessons.push(newLesson);
  //   chapter.save();
  // });

  Chapters.findOne( { 'lessons._id': '5fdc8a3eede1a319ee2c76cb' } )
  .exec()
  .then( (document) => {
    console.log(document);
    const lesson = document.lessons.id('601992b8d1fd11308683cda5');
    console.log(lesson);
  })

  // attention, en cas de modification d'une lesson, il faut la reintegrer au chapter et sauvegarder le chapter
  // on ne peut pas directement sauvegarder la lesson!

 }).catch( (err) => {
   console.log(err);
 })

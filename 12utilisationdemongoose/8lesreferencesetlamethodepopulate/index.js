// const mongoose = require('mongoose');
// const schema = mongoose.Schema;

// const lessonSchema = schema({
//   title: String
// });

// const Lessons = mongoose.model('lessons', lessonSchema);

// const chapterSchema = schema({
//   title: String,
//   nbrOfLessons: Number,
//   index: Number,
//   active: Boolean,
//   infos: { type: {}, default: { author: 'Nathalie' } },
//   lessons: [ { type: schema.ObjectId, ref: 'lesson' } ] // ref indique à mongoose la collection dans laquelle 
  // il doit aller chercher les lessons! 'lesson' fait reference au model lesson.
// })

// const Chapters = mongoose.model('chapters', chapterSchema);

// mongoose.connect('mongodb://yohann:Guitare512$@localhost:27017/dyma', { 
//   useNewUrlParser: true,
//   useUnifiedTopology: true
//  }).then( () => {
//   console.log('Connection OK!');

//   const newLesson = new Lessons({
//     title: 'Preface'
//   })

  // newLesson.save()
  //          .then( (nl) => {
  //           Chapters.findOne( {} )
  //                   .exec()
  //                   .then( (chapter) => {
  //                     console.log(chapter);
  //                     chapter.lessons.push(nl._id);
  //                     chapter.save();
  //                     console.log('+++++++++++++++++++++');
  //                     console.log(chapter.lessons);
  //                     console.log('+++++++++++++++++++++');
  //                   })
  //          })

//  }).catch( (err) => {
//    console.log(err);
//  })















// maintenant pour simplifier les relations entre chapitre et lesson,
// mais egalement pour pouvoir retrouver un chapitre à partir d'une lesson, 
// on va ajouter le chapter id dans lesson schema:

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
})

const Chapters = mongoose.model('chapters', chapterSchema);

mongoose.connect('mongodb://yohann:Guitare512$@localhost:27017/dyma', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
 }).then( () => {
  console.log('Connection OK!');

  // Chapters.findOne({}).exec().then( (chapter) => {
  //   const newLesson = new Lessons({
  //     title: 'newtitleoflesson',
  //     chapter: chapter._id
  //   })
  //   newLesson.save();
  // })

  // Lessons.find({}).skip(1).exec().then( (lesson) => {
  //   console.log(lesson);
  // })

  // Chapters.find({_id: '5fd7b1a55436994cdf6ad04d'}).exec().then( (chapter) => {
  //   console.log(chapter);
  // })


  // Lessons.find({ chapter: '5fd7b1a55436994cdf6ad04d'}).exec().then( (lessons) => {
  //   console.log(lessons);
  // }) // mais ici on ne recupere que l id de chapter et le moyen de recuperer tout le document chapter
  // est d utiliser "populate()":

    Lessons.find({ chapter: '5fd7b1a55436994cdf6ad04d'})
           .populate('chapter') // attention tout de meme, le populate refait une seconde requete!!!!
           .exec()
           .then( (lessons) => {
             console.log(lessons);
           })


  

 }).catch( (err) => {
   console.log(err);
 })

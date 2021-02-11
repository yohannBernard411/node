const mongoose = require('mongoose');
const schema = mongoose.Schema;

// creation du schema avec la fonction schema({})
const chapterSchema = schema({
  title: String,
  nbrOfLessons: Number,
  index: Number,
  active: Boolean,
  infos: { type: {}, default: { author: 'Nathalie' } }
})

// creation du model avec mongoose.model(nomDuModel, schemaCorrespondant)
const Chapters = mongoose.model('chapters', chapterSchema);

mongoose.connect('mongodb://yohann:Guitare512$@localhost:27017/dyma', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
 }).then( () => {
   console.log('Connection OK!');

   // verification de validation:
   Chapters.findOne({}).exec()
   .then( (document) => {
     document.title = 'Hey man!';
     document.validate();
     //renvoi true si le document est valide
   })

   //on peut egalement compter le nombre de resultats pour une querie donnée:
  //  Chapters.countDocuments({ nbrOfLessons: { $gt: 20 } } ).exec()
  //  .then( (count) => {
  //    console.log(count);
  //  }).catch( (err) => {
  //    console.log(err);
  //  })

   // le .exec() transform la requete en promesse
  //  Chapters.findOne({ title: 'Demain je m y mets'}).exec().then( (document) => {
  //    const myChapter = document;
  //    myChapter.title = 'Aujourd hui c est mieux!';
  //    myChapter.save((err, document) => {
  //      console.log(document);
  //    });
  //  }).catch( (err) => {
  //    console.log(err);
  //  })

  //ou alors pour etre plus efficace:
  // Chapters.findOneAndUpdate({ title: 'Aujourd hui c est mieux!'}, { $set: { 'infos.author': 'MaxLaMenace' } }, { new: true },
  // ).exec().then( (document) => {
  // attention, le .then( (document)) recupére le document mais avant sa modification!!!!!!
  // pour récuperer le nouveau document, il fait set new à true dans la querie!
  //   console.log(document);
  // }).catch( (err) => {
  //   console.log(err);
  // })

  //  const newChapter = new Chapters();
  //  newChapter.title = 'Demain je m y mets';
  //  newChapter.nbrOfLessons = 6;
  //  newChapter.index = 8;
  //  newChapter.active = true;

   // on peut aussi declarer les variables directement dans la creation du document:
   // const newChapter = new Chapters({
   // title = 'Demain je m y mets',
   // nbrOfLessons = 6,
   // index = 8,
   // active = true
   // });

  //  newChapter.save( (err, document) => {
  //    console.log(document); 
  //  })

//    Chapters.find({}, (err, documents) => {
//      console.log(documents);
//    })
 }).catch( (err) => {
   console.log(err);
 })

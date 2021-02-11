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

   // pour classer les resultat de la querie:
  //  Chapters.find({})
  //          .sort({ nbrOfLessons: -1 })  // 1=> ordre croissant, -1=> ordre decroissant
  //          .exec()
  //          .then( (document) => {
  //             console.log(document);
  //          })

  // on peut egalement classer sur plusieurs niveaux:
  // Chapters.find({})
  //          .sort({ nbrOfLessons: -1, index: 1 })
  //          .exec()
  //          .then( (document) => {
  //             console.log(document);
  //          })

  //on peut sauter certains resultats:
    // Chapters.find({})
    //        .sort({ nbrOfLessons: -1, index: 1 })
    //        .skip( 2 ) // permet de sauter les deux premiers resultats
    //        .exec()
    //        .then( (document) => {
    //           console.log(document);
    //        })

    // on peut aussi limiter le nombre de resultats
    // Chapters.find({})
    //        .sort({ nbrOfLessons: -1, index: 1 })
    //        .skip( 2 )
    //        .limit( 5 )// limite le resultat aux 5 premiers
    //        .exec()
    //        .then( (document) => {
    //           console.log(document);
    //        })

    // selectionner les field qui nous interresse:
           Chapters.find({})
           .sort({ nbrOfLessons: -1, index: 1 })
           .skip( 2 )
           .limit( 5 )
           //.select( '-index') // retire l'index
           .select( 'nbrOfLessons title') // conserve nbrOfLessons et title (et l'id qui est present par default!)
           .exec()
           .then( (document) => {
              console.log(document);
           })

 }).catch( (err) => {
   console.log(err);
 })

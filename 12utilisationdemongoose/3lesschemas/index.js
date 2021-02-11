const mongoose = require('mongoose');
const schema = mongoose.Schema;

// creation du schema avec la fonction schema({})
const chapterSchema = schema({
  title: String,
  nbrOfLessons: Number,
  index: Number,
  active: Boolean,
  //type mix: type qui n'est pas connu à l'avance:
  infos: {}
  // ou infos: Object   ou infos: schema.Types.Mixed

  // on peut egalement combiné des types:
  // infos: {
  //  author: String,
  //  date: Date
  //}

  //et même utiliser l'object Id pour lier un autre objet à celui ci par son id:
  // infos: schema.Types.ObjectId

  //on peut aussi ajouter une valeur par defauts:
  // infos: { type: {}, default: { author: 'Nathalie' } }

  // on peut dire si ce champ est obligatoire:
  // infos: { type: {}, required: true }
})

// creation du model avec mongoose.model(nomDuModel, schemaCorrespondant)
const Chapters = mongoose.model('chapters', chapterSchema);

mongoose.connect('mongodb://yohann:Guitare512$@localhost:27017/dyma', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
 }).then( () => {
   console.log('Connection OK!');
   Chapters.find({}, (err, documents) => {
     console.log(documents);
   })
 }).catch( (err) => {
   console.log(err);
 })

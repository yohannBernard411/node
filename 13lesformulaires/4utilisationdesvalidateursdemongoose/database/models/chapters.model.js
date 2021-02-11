const mongoose = require('mongoose');
const schema = mongoose.Schema;

const chapterSchema = schema({
  title: {
    type: String,
    // option: [valeur, 'messageDErreur']
    required: [true, 'Le titre est requis!'],
    minlength: [3, 'Titre trop court!'],
    maxlength: [17, 'Titre trop long'],
    // enum: ['camion', 'voiture', 'moto', 'scooter', 'velo', 'trotinette', 'skate']
  },
  nbrOfLessons: {
     type: Number,
     min: 1,
     max: 100,

    },
  index: Number,
  active: Boolean,
  infos: { type: {}, default: { author: 'Nathalie' } }
}, {
  timestamps: true
})

chapterSchema.pre('save', function() {
  return Chapters.countDocuments().exec().then( (nbr) => {
    this.index = nbr + 1;
  })
})

const Chapters = mongoose.model('chapters', chapterSchema);

module.exports = Chapters;

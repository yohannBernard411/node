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

chapterSchema.pre('save', function() {
  return Chapters.countDocuments().exec().then( (nbr) => {
    this.index = nbr + 1;
  })
})

const Chapters = mongoose.model('chapters', chapterSchema);

module.exports = Chapters;

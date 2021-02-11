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

module.exports = Chapters;

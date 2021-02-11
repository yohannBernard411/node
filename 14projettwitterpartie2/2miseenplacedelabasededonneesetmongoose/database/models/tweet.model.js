const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema = schema({
  content: {
    type: String,
    maxlength: 140,
    minlength: 1,
    required: true
  }
});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;
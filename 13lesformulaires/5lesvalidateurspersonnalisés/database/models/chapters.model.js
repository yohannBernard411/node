const mongoose = require('mongoose');
const schema = mongoose.Schema;

const validator1 = {
  validator: function(valueOfField) {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        if (valueOfField === '123'){
          reject(false);
        }else{
          resolve(true);
        }
      }, 3000);
    })
  },
  message: 'Ne doit pas etre 123'
}

const validator2 = {
  validator: function(v){
    return false;
  },
  message: 'echec'
}

const chapterSchema = schema({
  title: {
    type: String,
    // les validateurs personnalises se définissent dans validate:
    // validate: [ function, 'message d erreur']
    // validate: [ function(valueOfField) {
    //   if (valueOfField === '123'){
    //     return false;
    //   }else{
    //     true;
    //   }
    // }, 'Ne doit pas etre 123']
    
    // on peut egalement utiliser une promesse (asynchrone):
    // validate: [ function(valueOfField) {
    //   return new Promise( (resolve, reject) => {
    //     setTimeout(() => {
    //       if (valueOfField === '123'){
    //         reject(false);
    //       }else{
    //         resolve(true);
    //       }
    //     }, 3000);
    //   })
    // }, 'Ne doit pas etre 123']

    // on peut aussi utiliser plusieurs validators (on les definit plus haut):
    validate: [validator1, validator2]

  },
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

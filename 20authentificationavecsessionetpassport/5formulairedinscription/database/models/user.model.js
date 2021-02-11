const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const schema = mongoose.Schema;

const userSchema = schema({
  local: {
    email: { type: String, required: true, unique: true },
    password: { type: String }
  },
  username: String
})

userSchema.statics.hashPassword = async (password) => {
  try{
    const salt = await bcrypt.genSalt(10); //Le 10 est le nombre de fois ou le salt sera hashé! 
    return bcrypt.hash(password, salt);                                  // 10 etant la valeur par default
  }catch(e){
    throw e;
  }
}

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.local.password);
}

const user = mongoose.model('user', userSchema);

const passport = require('passport');
const { app } = require('../app');
const User = require('../database/models/user.model');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { findUserPerEmail } = require('../queries/user.queries');

app.use(passport.initialize()); //19m39
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user._id);
})

passport.deserializeUser(async(id, done) => {
  try{
    const user = await User.findById(id).exec();
    done(null, user);
  }catch(e){
    done(e, null);
  }
})

passport.use('local', new LocalStrategy({usernameField: 'email'}, async (email, password, done) => {
  try{
    const user = await findUserPerEmail(email);
    if(user){
      const match = await user.comparePassword(password);
      if(match){
        done(null, user);
      }else{
        done(null, false, { message: 'Password doesn\'t match!'});
      }
    }else{
      done(null, false, { message: 'User not found!'});
    }
  }catch(e){
    done(e);
  }
}));

passport.use('google', new GoogleStrategy({
  clientID: '<mettre ici le client id recuperer lors de l\'inscription chez google>',
  clientSecret: '<mettre ici le secret recuperer lors de l\inscription chez google',
  callbackURL: '/auth/google/cb'
}, (accessToken, refreshToken, profile, done) => {

}))
const passport = require('passport');

exports.sessionNew = (req, res, next) => {
  res.render('signin', { error: null });
}

exports.sessionCreate = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err){
      next(e);
    }else if(!user){
      res.render('signin', { error: info.message})
    }else{
      req.login(user, (err) => {
        if(err){
          next(e);
        }else{
          res.redirect('/');
        }
      })
    }
  })(req, res, next);
}

exports.googleAuth = (req, res, next) => {
  passport.authenticate('google', {
    scope: 'https://googleapis.com/auth/userinfo.email https://googleapis.com/auth/userinfo.profile'
  })(req, res, next)
}

exports.googleAuthCb = (req, res, next) => {
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/'
  })(req, res, next)
}

exports.sessionDelete = (req, res, next) => {
  req.logout();
  res.redirect('/');
}


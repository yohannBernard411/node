const secret = '48576d9f-dc0c-445c-adf7-2c76bb4e513e';
const jwt = require('jsonwebtoken');
const { findUserPerId } = require('../queries/user.queries');
const { app } = require('../app');

exports.createJwtToken = (user) => {
  const jwtToken = jwt.sign({ sub: user._id.toString()}, secret);
  return jwtToken;
}

const extractUserFromToken = async (req, res, next) => {
  const token = req.cookies.jwt
  if (token){
    try{
      const decodedToken = jwt.verify(token, secret);
      const user = await findUserPerId(decodedToken.sub);
      if(user){
        req.user = user;
        next();
      }else{
        res.clearCookie('jwt');
        res.redirect('/');
      }
    }catch(e){
      res.clearCookie('jwt');
      res.redirect('/');
    }

  }else{
    next();
  }
}

app.use(extractUserFromToken);

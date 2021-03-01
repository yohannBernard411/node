const secret = '48576d9f-dc0c-445c-adf7-2c76bb4e513e';
const jwt = require('jsonwebtoken');

exports.createJwtToken = (user) => {
  const jwtToken = jwt.sign({ sub: user._id.toString()}, secret);
  return jwtToken;
}
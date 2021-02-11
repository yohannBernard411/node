const USer = require('../database/models/user.model');

exports.userNew = (req, res, next) => {
  res.render('signup');
}

exports.userCreate = (req, res, next) => {
  res.end();
}
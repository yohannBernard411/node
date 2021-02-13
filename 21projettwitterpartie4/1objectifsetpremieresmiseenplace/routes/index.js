const router = require('express').Router();
const tweets = require('./tweets.routes');
const users.routes = require('./users.routes');

router.use('/tweets', tweets);
router.use('/users', users);

router.get('/', (req, res) => {
  res.redirect('/tweets');
});

module.exports = router;

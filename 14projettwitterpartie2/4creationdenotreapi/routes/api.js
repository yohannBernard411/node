// une api renvoi de la data et non une page html, c est la difference principale.

const router = require('express').Router();
const tweets = require('./api.tweets');

router.use('/tweets', tweets);

module.exports = router;

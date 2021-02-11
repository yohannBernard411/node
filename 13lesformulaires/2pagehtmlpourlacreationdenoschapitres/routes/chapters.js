const router = require('express').Router();

router.post('/', (req, res) => {
  console.log('données envoyer pour creation!');
  res.end();
})

module.exports = router;

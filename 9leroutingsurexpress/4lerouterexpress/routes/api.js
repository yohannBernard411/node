const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.json([{ name: 'yohann' }]);
})

module.exports = router;

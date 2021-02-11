const express = require('express');
const router = express.Router();
const Chapters = require('../database/models/chapters.model');

router.get('/users', (req, res) => {
  Chapters.findOne({}).exec().then( (document) => {
    res.json(document);
  })
  
})

module.exports = router;

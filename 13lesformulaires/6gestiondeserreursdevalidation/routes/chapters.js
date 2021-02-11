const Chapters = require('../database/models/chapters.model');
const router = require('express').Router();
const util = require('util');

router.post('/', (req, res) => {
  const body = req.body;
  console.log({ body });
  const newChapter = new Chapters({
    ...body,
    active: body.active ? true : false
  });

  console.log({ newChapter });

  newChapter.save().then( (chapter) => {
    console.log({ chapter });
    // res.render('index');// modifie l'url affichée, on va donc plutot redirect:
    res.redirect('/');
  }).catch( (err) => {
    const errors = Object.keys(err.errors).map( key => err.errors[key].message);
    console.log(util.inspect(errors,{ compact: true, depth: 5, breakLength: 80, colors: true } ));
    res.status(400).render('index', { errors });
  })
})

module.exports = router;

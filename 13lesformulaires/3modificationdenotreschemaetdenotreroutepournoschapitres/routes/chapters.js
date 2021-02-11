const Chapters = require('../database/models/chapters.model');
const router = require('express').Router();

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
    console.log({ err });
    res.status(400).render('index');
  })
})

module.exports = router;

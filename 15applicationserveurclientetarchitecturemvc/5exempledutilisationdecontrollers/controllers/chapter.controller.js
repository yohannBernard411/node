const Chapter = require('../database/models/chapters.model');

exports.chapterList = async (req, res) => {
  try{
    const chapters = await Chapters.find({}).exec();
    res.render('index', { chapters });
  }catch(e){
  }
};

exports.chapterDetails = async (req, res) => {
  try{
    const chpaterId = req.params.chapterId;
    const chapter = await Chapters.findById(chapterId).exec();
    res.render('chapter', { chapter });
  }catch(e){
  }
};

exports.chapterDelete = async (req, res) => {
  try{
    const chpaterId = req.params.chapterId;
    const chapter = await Chapters.findOneAndDelete({ _id: chapterId }).exec();
    const chapters = await Chapter.find({}).exec().then();
    res.render('index', { chapters });
  }catch(e){
  }
};

exports.chapterCreate = async(req, res) => {
  try{
    const body = req.body;
    const newChapter = new Chapters({
      ...body,
      active: body.active ? true : false
    });
    await newChapter.save().then();
    res.redirect('/');
  }catch(e){
    const errors = Object.keys(e.errors).map( key => e.errors[key].message);
    res.status(400).render('index', { errors });
  }
};

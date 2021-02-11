const { getChapters, getChapter, deleteChapter, createChapter } = require('../queries/chapter.queries');

exports.chapterList = async (req, res, next) => {  
  try {
    const error = req.test.email;
    const chapters = await getChapters();
    res.render('index', { chapters });
  } catch(e) {
    next(e);
  }
};

exports.chapterDetails = async (req, res) => {
  try {
    const chapterId = req.params.chapterId;
    const chapter = await getChapter(chapterId);
    res.render('chapter', { chapter });
  } catch(e) {
		next(e);
  }
};

exports.chapterDelete = async (req, res) => {
  try {
    const chapterId = req.params.chapterId;
    await deleteChapter(chapterId);
    const chapters = await getChapters();
    res.render('index', { chapters });
  } catch(e) {
		next(e);
  }
};

exports.chapterCreate = async (req, res) => {
  try {
    await createChapter(req.body);
    res.redirect('/');
  } catch(e) {
    const errors = Object.keys(e.errors).map( key => e.errors[key].message );
    res.status(400).render('form', { errors });
  }
};

exports.addChapter = async (req, res) => {
	try {
		res.render('form');
	} catch(e) {
		next(e);
	}
};
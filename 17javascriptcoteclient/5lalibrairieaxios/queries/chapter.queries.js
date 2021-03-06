  
const Chapter = require('../database/models/chapters.model');

exports.getChapters = () => {
  return Chapter.find({}).exec();
};

exports.getChapter = (chapterId) => {
  return Chapter.findById(chapterId).exec();
};

exports.deleteChapter = (chapterId) => {
  return Chapter.findOneAndDelete({ _id: chapterId }).exec()
};

exports.createChapter = (chapter) => {
  const newChapter = new Chapter({
    ...chapter,
    active: chapter.active ? true : false
  });
  return newChapter.save()
};

exports.searchChapters = (search) => {
  return Chapter.find({ title: new RegExp(search, 'i') }).exec()
}
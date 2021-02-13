const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const multer = require('multer');
const User = require('./database/models/user.model');

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb( null, path.join(__dirname, '/upload'))
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  }),
  limits: {
    fileSize: 6000000
  },
  fileFilter: (req, file, cb) => {
    console.log(file);
    cb(null, true);
  }})
const util = require('util');
require('./database');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'upload')));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('tiny'));

app.get('/', async (req, res) => {
  try{
    const users = await User.find({}).exec();
    const user = users && users.length ? users[0] : null
    res.render('index', { user });
  }catch(e){
  }
})

app.post('/file', upload.single('avatar'), async (req, res) => {
  console.log(util.inspect(req.body, { compact: false, depth: 5, breakLength: 80, color: true }));
  console.log(util.inspect(req.file, { compact: false, depth: 5, breakLength: 80, color: true }));

  try{
    const newUser = new User({
      avatar: req.file.filename
    });
    const savedUser = await newUser.save();
    res.redirect('/');
  }catch(e){
    next(e);
  }
})

app.use((err, req, res, next) => {
  console.log(util.inspect(err, { compact: false, depth: 5, breakLength: 80, color: true }));
  res.status(500).redirect('/');
})

app.listen(3000);

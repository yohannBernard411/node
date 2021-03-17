const email = require('./email');

email.getTemplate('email-welcome', {
  to: 'yohannb215@gmail.com',
  subject: 'Bienvenue sur yohann-project',
  metaData: {
    name: 'Jean-Eude'
  }
});

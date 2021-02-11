const fs = require('fs');

/* **********************************
  *                                  *
  * ATTENTION FUNCTIONS ASYNCHRONES  *
  *                                  *
   **********************************/

// fs.readFile('./fichiertest.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// })

// fs.appendFile('./fichiertest.txt', 'Une nouvelle data ajoutee à la fin!!!', (err) => {
//   if (err) throw err;
// });

fs.unlink('./fichiertest.txt', (err) => {
  if (err) throw err;
})

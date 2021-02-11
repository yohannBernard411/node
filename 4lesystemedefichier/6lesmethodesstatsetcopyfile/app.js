const fs = require('fs');

/*
   **********************************
  *                                  *
  * ATTENTION FUNCTIONS ASYNCHRONES  *
  *                                  *
   **********************************
*/

// fs.copyFile('./fichier.txt', './fichiercopier.txt', (err) => {});


/*
   **********************************
  *                                  *
  * MEME FONCTION EN SYNCHRONE !!!!  *
  *                                  *
   **********************************
*/

// fs.copyFileSync('./fichier.txt', './fichiercopier2.txt');

/*
   **********************************
  *                                  *
  *         FONCTION STAT            *
  *                                  *
   **********************************
*/

fs.stat('./fichier.txt', (err, stats) => {
  console.log({ err, stats });
  console.log(stats.isFile());
  console.log(stats.isDirectory());
})

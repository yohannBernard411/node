const fs = require('fs');

/* **********************************
  *                                  *
  * ATTENTION FUNCTIONS ASYNCHRONES  *
  *                                  *
   **********************************/

// recursive: true permet de creer le dossier parent si il n existe pas.

// fs.mkdir('./mondossier/monsousdossier', { recursive: true }, (err) => {
//   console.log(err);
// });

// fs.rmdir('./mondossier/monsousdossier', (err) => {
// })

fs.readdir('./mondossier', (err, files) => {
  console.log(files);
})

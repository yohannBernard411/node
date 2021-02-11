const fs = require('fs');

fs.open('./fichiertest.txt', 'a+', (err, fd) => {
  if (err) throw err;
  console.log(fd);
  fs.close(fd, (err) => {});
});

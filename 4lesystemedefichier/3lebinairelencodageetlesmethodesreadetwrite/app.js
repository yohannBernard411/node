const fs = require('fs');

// fs.open('./fichiertest.txt', 'a+', (err, fd) => {
//   if (err) throw err;
//   console.log(fd);
//   fs.write(fd, 'Bonjour123', (err, written, str) => {
//     console.log({err, written, str});
//     fs.close(fd, (err) => {});
//   })
  
// });

fs.open('./fichiertest.txt', 'a+', (err, fd) => {
  if (err) throw err;
  console.log(fd);
  const buffer = new Buffer.from( new ArrayBuffer(8), 'utf-8');
  fs.read(fd, buffer, 0, 8, 0, (err, bytesRead, buffer) => {
    const content = buffer.toString();
    console.log({err, bytesRead, buffer, content});
    fs.close(fd, (err) => {});
  })
  
});

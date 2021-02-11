const path = require('path');

const test = path.dirname('./node_modules/express/index.js');
const test2 = path.extname('./node_modules/express/index.js');
const test3 = path.isAbsolute('./node_modules/express/index.js');
const test4 = path.join(__dirname, 'node_modules', 'express');
const test5 = path.parse(path.join(__dirname, 'node_modules', 'express', 'index.js'));

console.log("test:");
console.log(test);
console.log("test2:");
console.log(test2);
console.log("test3:");
console.log(test3);
console.log("test4:");
console.log(test4);
console.log("test5:");
console.log(test5);

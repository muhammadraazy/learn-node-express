const path = require('path');

console.log(path.sep())

// base file name (nama file)
console.log(path.basename(__filename));

// directory name (nama direktori/folder)
console.log(path.dirname(__filename));

// file extension 
console.log(path.extname(__filename));

// create a file path object
console.log(path.parse(__filename));

// concatenate path (menggabungkan fle dengan folder)
console.log(path.join(__dirname, "test", "hello.html"));

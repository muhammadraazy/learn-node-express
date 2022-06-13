// global object
// _dirname - path to current directory
// _filename - filename
// require - function to use modules (commonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname)
// setInterval(() => {
//     console.log("global")
// }, 1000)

const names = require("./module")
console.log(names.items)
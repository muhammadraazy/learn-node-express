const { readFile } = require("fs").promises
// const util = require("util")
// const readFileProm = util.promisify(readFile)

// const getText = (path) => {
//     return new Promise((res, rej) => {
//         readFile(path, "utf8", (err, data) => {
//             if(err) rej(err)
//             res(data)
//         })
//     })
// }



const getAsync = async() => {
    try{
        const data = await readFile("test.txt", "utf8")
        console.log(data)
    } catch(err) {
        console.log(err)
    } 
}
getAsync()
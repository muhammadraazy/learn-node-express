// streams to work with big data/file 
// load the data fast and efficient
// STREAMS
const { createReadStream } = require("fs")
const http = require("http")

// const Server = http.createServer((req, res) => {
//      const stream = fs.createReadStream("test.txt")
//      stream.pipe(res)
// })

// Server.listen(3000, () => console.log("srver running on port 3000"))

const stream = createReadStream("tests.txt", 
{ highWaterMark: 90000, encoding: "utf8" })

stream.on("data", result => {
     console.log(result)
})
stream.on("error", err => console.log(err))

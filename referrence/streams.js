const fs  = require("fs");

const readstream = fs.createReadStream("./test/helloworld.txt", { encoding: "utf8" });
const writestream = fs.createWriteStream("./test/hello2.txt");

readstream.on("data", chunk => {
    console.log("NEW CHUNK")
    console.log(chunk)

    writestream.write('\n NEW CHUNK \n')
    writestream.write(chunk)
})

// piping
readstream.pipe(writestream)
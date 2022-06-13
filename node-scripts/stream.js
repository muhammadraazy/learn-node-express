
app.get("/stream", (req, res) => {
    const writable = new stream.Writable({
        write: function(chunk, encoding, next) {
               console.log(chunk.toString())
               next()
        }
    })

    writable.write("hi")
    writable.writable
    writable.cork()
    writable.writableCorked
    writable.write("hello") 
   
    writable.write("GfG", "utf8", () => {
       console.log("CS-Portal!");
  });
    writable.setDefaultEncoding("utf8")
    writable.on('close', () => console.log(" no further operation ") )
    writable.on('finish', () => {
        console.log("write is completed")
    })
    // to end the stream
    writable.end("last data", "utf8", () => {
        console.log("Writable stream ended!");
       });
       // to check that stream has been ended
   writable.writableEnded
   //  destroy the stream with destroy
  writable.destroy()
//    to check that the stream has been destroyed
  writable.destroyed
})

app.get("/file", (req, res) => {
    fs.copyFile("./views/index.html", "new.html", (err) => {
         if(err) throw err
         console.log("copied file was successfully ")
    })

    fs.readFile("./views/index.html", (err, data) => {
        if(err) throw err

        res.send(`${data}`)
        // res.writeHead(200, {'Content-Type': "text/html"})
        // res.write(`${data}`)
        // res.end()
    } )

    fs.readdir("./views", { encoding: "utf-8", withFileTypes: false }, (err, dir) => {
        if(err) throw err

        const filter = dir.filter(dirc => dirc === "index.html" )

       console.log(filter);
    })

    fs.rmdir("myServer", () => console.log("directory was removed"))
    fs.watchFile("./views/index.html", { persistent: true, interval: 100 }, (current, previous) => {
        console.log(previous);
        console.log(current.size);
    })

    fs.unlink("./views/contact.html", () => console.log("file was removed"))
    fs.truncate("./views/new.html", 10, () => console.log("file truncate") )
})

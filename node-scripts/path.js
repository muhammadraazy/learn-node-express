import readline from 'readline'
import path from "path"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'nodejs> '
});

// prompt to console log 
rl.prompt();


app.get("/", (req, res) => {
  const person = "mohammed"
   
   const file = path.basename("/views/index.html")
   const dir = path.dirname("/views/about.html")
   const ext = path.extname("/views/about.html")
   const format = path.format({
       root: "/",
       dir: "/views",
       base: "index.html",
   })
   const isAbs = path.isAbsolute("/views/index.html")
   const join = path.join(__dirname, "/views/index.html")
   const normal = path.normalize("/views/../index.html")
   const parse = path.parse("/views/about.html")
   const rel = path.relative("node-server", "views/about.html")

   const resolve= path.resolve("views/", "index.html")
   const resolve1 = path.resolve("/views", "index.html")
   
   console.log(file, dir, ext, format, isAbs, join, normal)
   console.log(parse)
   console.log(rel)
   console.log(resolve)
   console.log(resolve1)
   res.sendFile(join)
})

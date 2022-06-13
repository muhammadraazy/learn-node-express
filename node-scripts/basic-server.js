const express = require("express")
const http = require("http")
const { readFileSync } = require("fs")

const jsonData = readFileSync("test.json")
const index = readFileSync("./views/index.html")
const style = readFileSync("./views/style.css")

console.log("express")
const server = http.createServer((req, res) => { 
    
    if(req.url === "/") { 
        res.writeHead(200, { "content-type":  "text/html" })
        res.write(index) 
        res.end()
    } else if(req.url === "/style.css") {
         res.writeHead(200, { "content-type":  "text/css" })
         res.write(style)
         res.end()
    }
    
    if(req.url === "/about") {
         res.writeHead(200, { "content-type":  "application/json" })
         res.write(jsonData)
         res.end()
     } else {
         res.writeHead(404, { 'content-type': "text/html" })
         res.write(`<h2> Page Not FOund </h2>`)
         res.end()
     }
})

server.listen(3300)
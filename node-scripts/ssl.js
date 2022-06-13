const  express = require("express")
const https= require("https")
const path = require("path")
const fs = require("fs")

// ssl safe site just for development
// step 1
// command to generate key
//  openssl genrsa -out key.pem

// step 2
// command to generate a Certificate Signed Request  key
// openssl req -new -key key.pem -out csr.pem 
// challenge pass for CSR key (ariibaizdi)

// command to generate ssl certificate (openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem) 

const file = fs.readFile(path.join())

const app = express()
const port = 1000;

const sslServer = https.createServer({
    key: fs.readFileSync( path.join(__dirname, "cert", "key.pem") ) ,
    cert:  fs.readFileSync(path.join(__dirname, "cert", "cert.pem") )
}, app)


sslServer.listen(port, () => console.log("server is now running and safe"))

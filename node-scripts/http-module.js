const http = require("http")

const PORT = process.env.PORT || 3300;

const server = http.createServer((req, res)  =>  {
     const aliveAgent = new http.Agent({
         keepAlive: true, maxSockets: 0, maxSockets: 5, maxTotalSockets: 5, maxFreeSockets: 10
     })

     const connect = aliveAgent.createConnection;
     console.log("connection :", connect)
     
     res.writeHead(200, { 'Content-Type': "text/html" })
     res.write(`<h2>halo</h2>`)

     console.log( req.trailers)
     console.log( req.headers )
    //  console.log( req.rawHeaders )
     console.log( req.httpVersion )
     console.log( req.aborted )

     const statusCode = res.statusCode;
     const headerSet = res.headersSent
     const socket = res.socket
     const statusMsg = res.statusMessage
     const writeProcess = res.writeProcessing()
     const sendDate = res.sendDate
     const resCon = res.connection;
     
     console.log(resCon.address().port)
     console.log(statusCode)
     console.log(headerSet)
     console.log(statusMsg)
     console.log(writeProcess)
     console.log(sendDate)

     res.setTimeout(3000, () => console.log("response was destroyed due timeout") )

          res.end()
})

server.listen(PORT, () => {
     console.log("server is now running") 
})

server.setTimeout(3000, () => {
    console.log("server timeout is 3000")
    
    const timeout = server.timeout;
    const listening = server.listening
    const headersTimeout = server.headersTimeout;
    const maxHead = server.maxHeadersCount
    const keepAliveTime = server.keepAliveTimeout


    console.log(timeout)
    console.log(listening)
    console.log(headersTimeout)
    console.log(maxHead)
    console.log(keepAliveTime)

    if(headersTimeout > 4000) {
        server.close(() => console.log("server is closed") )
    }

} )

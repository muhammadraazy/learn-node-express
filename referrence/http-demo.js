const http = require("http");

const server = http.createServer((req, res) => {
    res.write("hello world");
    res.end('');
})

const port = 6000;

server.listen(port, () => console.log(`server is running on port ${port}`));

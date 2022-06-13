// let http = require("http");

// http.createServer(function (req, res) {
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.end("hello world");
// }).listen(5000);

let mySql = require('mysql');

let con = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("connected");
    
    con.query("CREATE DATABASE mydb", function(err, result) { 
        if(err) throw err;
        console.log("Database created successfully");
    })
})

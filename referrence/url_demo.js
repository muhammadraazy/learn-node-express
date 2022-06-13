const url = require("url");

const myUrl = new URL("https://website.com:5000/hello.html?id=100&status=active");

// serialized url 
console.log(myUrl.href);

//url host (root domain)
console.log(myUrl.host);

// url hostname (beda host dengan hostname adalah hostname tidak termasuk port)
console.log(myUrl.hostname);

// url port
console.log(myUrl.port); 

// url pathname/nama file
console.log(myUrl.pathname);

// serialized query/url parameter
console.log(myUrl.search);

// params object (mengembalikan paramter berupa object)
console.log(myUrl.searchParams);

// add parameter
myUrl.searchParams.append("workflow", "good");
console.log(myUrl.searchParams);

// loop url
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));


const os = require('os');
const path = require("path");

// platform operating system
console.log(os.platform(''));

// OS architecture
console.log(os.arch());

// os cpu
console.log(os.cpus());

// system memory
console.log(os.freemem());

// system total memory
console.log(os.totalmem());

// home directory
console.log(os.homedir(''));


// uptime
console.log(os.uptime);

console.log(os.userInfo())
console.log(os.endianness())

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)
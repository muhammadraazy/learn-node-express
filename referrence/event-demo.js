const eventEmitter = require('events');

// create class
class MyEmitter extends eventEmitter {}

// initialize event
const myEmitter = new MyEmitter();

// membuat event listener
myEmitter.on("event", () => console.log("event goes on.."))

// emit/menjalankan event
myEmitter.emit("event");

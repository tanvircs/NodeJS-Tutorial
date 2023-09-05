const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmiter extends EventEmitter {}

// initialize objects

const myEmitter = new MyEmiter();

//add listner for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  myEmitter.emit("log", "Log event emitted!");
}, 2000);

const EventEmitter = require("events");
// logger

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("loggerevent", message);
  }
}

module.exports = Logger;

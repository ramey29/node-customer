const EventEmitter = require("events");
const emitter = new EventEmitter();

//listen to an event u registering a listener
let listenEvent = emitter.on("messageLog", function (args) {
  console.log("hello event messageLog called", args);
});

// register an event
emitter.emit("messageLog", { id: 1, url: "https://" });

module.exports = { listenEvent };

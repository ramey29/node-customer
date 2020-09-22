const OS = require("os");

let totalMemory = OS.totalmem();
let freeMemory = OS.freemem();

module.exports = {
  totalMemory: totalMemory,
  freeMemory: freeMemory,
};

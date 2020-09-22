const FS = require("fs");

let syncreadDir = FS.readdirSync("./");
let asyncreadDir = FS.readdir("./$", (error, res) => {
  if (error) {
    console.log("error", error);
  } else {
    console.log("result", res);
  }
});

module.exports = {
  syncreadDir: syncreadDir,
  asyncreadDir: asyncreadDir,
};

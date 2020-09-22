const mongoose = require("mongoose");
module.exports = function () {
  mongoose
    .connect(
      "mongodb+srv://user1:1234@customer.yb6mx.mongodb.net/playground" ||
        "mongodb://localhost:4040/playground"
    )
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log("failed to connect to db:", err);
    });
};

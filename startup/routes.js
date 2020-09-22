const home = require("../routes/home");
const customers = require("../routes/customer");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const debugStart = require("debug")("app:start");
// const config = require("config");

module.exports = function (app) {
  // config setting
  // debugStart("app name :" + config.get("name"));
  // debugStart("mail host name :" + config.get("mail.host"));
  // debugStart("host password :" + config.get("mail.password"));
  app.use(cors());
  app.use(express.json()); // to parse the body of request with JSON payload
  app.use(express.urlencoded({ extended: true })); // to parse the body of request with URL encoded payload
  app.use(express.static("public")); // to serve static files
  // app.use(helmet()); // for adding secure headers to http request
  // if (app.get("env") === "development") {
  //   app.use(morgan("tiny")); // for logging
  //   debugStart("morgan enabled");
  // }

  app.use("/", home);
  app.use("/api/customers", customers);
};

const express = require("express");
const app = express();

require("dotenv").config();
require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();

require("./startup/validation")();

// connect to mongodb

// env variable
// debugStart(app.get("env"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

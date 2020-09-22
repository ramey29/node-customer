const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello server we are connected");
  res.end();
});

module.exports = router;

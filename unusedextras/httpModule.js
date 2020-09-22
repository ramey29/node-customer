const HTTP = require("http");
const server = HTTP.createServer((req, res) => {
  if (req === "/") {
    res.write("hello world");
    res.end();
  }
});
server.listen(3000);

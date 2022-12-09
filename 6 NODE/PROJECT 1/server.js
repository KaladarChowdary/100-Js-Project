var http = require("http");
console.log("run 1");

http
  .createServer((req, res) => {
    console.log(`success`);

    res.write(req);
    res.end();
  })
  .listen(3000);

console.log("run");

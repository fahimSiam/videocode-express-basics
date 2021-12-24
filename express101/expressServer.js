/* setInterval(() => {
  console.log("timer 3");
}, 1000);
 */
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("/public"));

app.all("/", (req, res) => {
  console.log(path.join(__dirname + "/node.html"));
  res.sendFile(path.join(__dirname + "/node.html"));
  //res.send(`<h1>this is the express home page</h1>`);
});

app.listen(3000);
console.log("the server is running on port 3000");

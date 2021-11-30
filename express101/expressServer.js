/* setInterval(() => {
  console.log("timer 3");
}, 1000);
 */
const express = require("express");
const app = express();

/* app.all("*", (req, res) => {
  res.send(`<h1>this is the express home page</h1>`);
});
 */
app.listen(3000);
console.log("the server is running on port 3000");

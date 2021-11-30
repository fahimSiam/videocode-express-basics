const express = require("express");
const app = express();

/* app.all("/", (req, res) => {
  res.send(`<h1>this is the express all home page</h1>`);
}); */
app.get("/", (req, res) => {
  res.send(`<h1>this is the express get home page</h1>`);
});
app.post("/", (req, res) => {
  res.send(`<h1>this is the express post home page</h1>`);
});

app.delete("/", (req, res) => {
  res.send(`<h1>this  is the express delete home page</h1>`);
});
app.put("/", (req, res) => {
  res.send(`<h1>this is the express put home page</h1>`);
});

app.listen(3000);
console.log("the server is running on port 3000");

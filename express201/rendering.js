const path = require('path');

const express = require("express");
const app = express();

const helmet = require('helmet');
app.use(helmet());

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.set("view engine", "ejs");
//app.set("view engine", "hbs");
app.set("view engine", "pug");
app.set('views', [path.join(__dirname, 'views')]);
/* app.get("/test", (req, res, next) => {
 // data = req.body;
  res.status(200).json({
    msg: "sanity check",
  });
}); */

app.get("/test", (req, res, next) => {
  // data = req.body;
  res.render("index");
});

app.listen(3000);

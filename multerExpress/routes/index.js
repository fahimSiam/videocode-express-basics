var express = require("express");
var router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "public/images/uploads" });
const fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/formsub", upload.single("meme"), (req, res, next) => {
  console.log(req.file);
  const newPath = `public/images/uploads/${req.file.originalname}`;
  fs.rename(req.file.path, newPath, (err) => {
    if (err) throw err;
    res.json("uploaded");
  });

 
});

module.exports = router;

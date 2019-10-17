var express = require("express");
var router = express.Router();

//root route
router.get("/", function(req, res) {
  res.render("landing", { title: "999 TO iVMS" });
});

/* GET home page. */
router.get("/index", function(req, res, next) {
  // res.send("index");
  res.render("index", { title: "999 TO iVMS" });
});

module.exports = router;

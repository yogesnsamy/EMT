var express = require("express");
var router = express.Router();
const { slack_bot_token, slack_signing_secret, port } = require("../config");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with an alert");
});

router.get("/cicak", function(req, res, next) {
  res.send("respond with a cicak");
});

module.exports = router;

var express = require("express");
var router = express.Router();
// const { WebClient } = require("@slack/web-api");
const axios = require("axios");
const accessToken = process.env.SLACK_TOKEN;

//INDEX - show all alerts
router.get("/", function(req, res) {
  // Get all campgrounds from DB
  // Campground.find({}, function(err, allCampgrounds){
  //    if(err){
  //        console.log(err);
  //    } else {
  //       res.render("campgrounds/index",{campgrounds:allCampgrounds});
  //    }
  // });
  res.render("alert/index");
});

//CREATE - add new campground to DB
router.post("/", function(req, res) {
  const fname = req.body.fname;
  const contact = req.body.contact;
  const channel = req.body.channel;
  const msg = req.body.message;
  // var desc = req.body.description;
  async function postMessage(messageText, channel) {
    const url = "https://slack.com/api/chat.postMessage";
    const post = {
      channel: channel,
      text: messageText
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    };
    try {
      const response = await axios.post(url, post, { headers: headers });
      console.log(` Response code: ${response.status}`);
    } catch (e) {
      console.log(`Error posting message: ${e}`);
    }
  }
  postMessage(
    `Hello ${fname} @ ${channel}, contact me at ${contact}. p/s: ${msg}`,
    channel
  );
  res.redirect("/alert");
});

router.get("/new", function(req, res, next) {
  res.render("alert/new");
});

module.exports = router;

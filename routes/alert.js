var express = require("express");
var router = express.Router();
const { WebClient } = require("@slack/web-api");

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
  console.log("Getting started with Node Slack SDK");

  // Create a new instance of the WebClient class with the token read from your environment variable
  const web = new WebClient(process.env.SLACK_TOKEN);
  console.log(process.env.SLACK_TOKEN);
  // The current date
  const currentTime = new Date().toTimeString();

  (async () => {
    // Use the `auth.test` method to find information about the installing user
    const res = await web.auth.test();

    // Find your user id to know where to send messages to
    const userId = res.user_id;

    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({
      channel: userId,
      text: `The current time is ${currentTime}`
    });

    console.log(process.env.SLACK_TOKEN);
  })();
  //--------
  res.redirect("/alert");
});

router.get("/new", function(req, res, next) {
  res.render("alert/new");
});

module.exports = router;

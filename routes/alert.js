var express = require("express");
var router = express.Router();
// const { slack_bot_token, slack_signing_secret, port } = require("../config");
const { WebClient } = require("@slack/web-api");
const { slack_token } = require("../config");
/* GET users listing. */
router.get("/", function(req, res, next) {
  // res.send("respond with an alert");
  //--------

  console.log("Getting started with Node Slack SDK");

  // Create a new instance of the WebClient class with the token read from your environment variable
  const web = new WebClient(slack_token);
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

    console.log("Message posted!");
  })();
  //--------
  res.send("message posted");
});

router.get("/cicak", function(req, res, next) {
  res.send("respond with a cicak");
});

module.exports = router;

const { WebClient } = require("@slack/web-api");
const { slack_token } = require("./config");

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

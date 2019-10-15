// config.js
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  slack_token: process.env.SLACK_TOKEN
};

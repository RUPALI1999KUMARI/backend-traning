const express = require("express");
const abc = require("../introduction/intro");
const router = express.Router();
const logger = require("../logger/logger.js");
const assignment = require("../util/helper.js");
const formatter = require("../validator/formatter.js");

router.get("/test-me", function (req, res) {
  console.log("My batch is", abc.name);
  abc.printName();
  logger.logger();
  assignment.assignment();
  formatter.myformatter();
  res.send("My second ever api!");
});

router.get("/test-you", function (req, res) {
  res.send("This is the second routes implementation");
});

router.get("/give-me-students-data", function (req, res) {});
module.exports = router;
// adding this comment for no reason

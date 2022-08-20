const express = require("express");
const router = express.Router();

const author = require("../controllers/authorController");
const book = require("../controllers/bookController");
const publisher = require("../controllers/publisherController");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/createAuthor", author.createAuthor);
router.post("/createPublisher", publisher.createPublisher);
router.post("/createBook", book.createBook);
router.get("/getAllBooks", book.getBooks)
router.put("/editBook",book.editBook)

module.exports = router;










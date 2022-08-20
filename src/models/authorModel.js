const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const authorSchema = new mongoose.Schema(
  {
    authorName: String,
    age: Number,
    address: String,
    ratings: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("myNewAuthor", authorSchema);

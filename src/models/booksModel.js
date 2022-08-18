const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: { type: String },
    authorId: { type: Number, required: true },
    prices: { type: Number },
    rating: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book1", bookSchema);

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      unique: true,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },                    
    year: {                     
      type: Number,
      required: true,
    },
    pages:{
      type:Number,
    },
    stockAvailable:{
      type:Boolean
    },
    price:{
      type:String,
    }
  },
  { timestamps: true }

);

module.exports = mongoose.model("myBooks", bookSchema);

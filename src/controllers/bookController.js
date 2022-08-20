const bookModel = require("../models/bookModel");
const publisherModel = require("../models/publisherModel")
const authorModel = require("../models/authorModel")
const ObjectId = require("mongoose").Types.ObjectId;

const createBook = async function (req, res) {
    let book = req.body;
    if (book.author == "" || book.author == undefined) {
        return res.send({ message: "author is required" });
    } else if (book.publisher == "" || book.publisher == undefined) {
        return res.send({ message: "publisher id is not valid" });
    }
    if (!ObjectId.isValid(book.author)) {
        return res.send({ message: "author id is not valid" });
    } else if (!ObjectId.isValid(book.publisher)) {
        return res.send({ message: "publisher id is not valid" });
    }
    let bookCreated = await bookModel.create(book);
    res.send({ data: bookCreated });
};

const getBooks = async function (req, res) {
    let findBook = await bookModel.find().populate("author", { authorName: 1, age: 1 }).populate("publisher", { name: 1, headQuarter: 1 })
    res.send({ data: findBook });
};

const editBook = async function (req, res) {
    let findBook = await bookModel.find()
    for (let i = 0; i < findBook.length; i++) {
        let updateBook = await bookModel.findById(findBook[i]._id)
        let publisherFind = await publisherModel.findById(updateBook.publisher)
        let authorFind = await authorModel.findById(updateBook.author)
        if (publisherFind.name == "Penguin" || publisherFind.name == "HarperCollins") {
            updateBook.isHardCover = true
        }
        if (authorFind != null && authorFind.ratings > 3.5) {
            updateBook.price = updateBook.price + 10
        }
        updateBook.save()
    }
    res.send({ data: findBook })
}

module.exports = { createBook, getBooks, editBook };
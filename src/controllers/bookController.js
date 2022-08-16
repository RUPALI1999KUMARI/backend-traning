const bookModel = require("../models/bookModel");

const createBook = async function (req, res) {
    let data = req.body;
    let savedData = await bookModel.create(data);
    res.send({ msg: savedData });
};

const getAllBooks = async function (req, res) {
    let allBooks = await bookModel
        .find()
        .select({ bookName: 1, authorName: 1, _id: 0 });
    res.send({ msg: allBooks });
};

const getBooksInYear = async function (req, res) {
    let year = req.query;
    let allBooks = await bookModel.find(year);
    res.send({ msg: allBooks });
};

const getParticularBooks = async function (req, res) {
    let query = req.query;
    let allBooks = await bookModel.find(query);
    res.send({ msg: allBooks });
};

const getXINRBooks = async function (req, res) {
    let allBooks = await bookModel.find({
        $or: [{ price: "100INR" }, { price: "200INR" }, { price: "500INR" }],
    });
    res.send({ msg: allBooks });
};

const getRandomBooks = async function (req, res) {
    let allBooks = await bookModel.find({
        $or: [{ stockAvailable: true }, { pages: { $gt: 500 } }],
    });
    res.send({ msg: allBooks });
};

module.exports = {
    createBook,
    getAllBooks,
    getBooksInYear,
    getParticularBooks,
    getXINRBooks,
    getRandomBooks,
};

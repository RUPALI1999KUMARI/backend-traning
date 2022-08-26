const productdocumentModel = require("../models/productdocumentModel");

const createproduct = async function (req, res) {
  let product = req.body;
  let createproduct = await productdocumentModel.create(product);
  res.send({ data: createproduct });
};

module.exports = { createproduct };

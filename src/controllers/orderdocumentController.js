const OrderModel = require("../models/OrderdocumentModel");
const UserModel = require("../models/userdocumentModel");
const productdocumentModel = require("../models/productdocumentModel");

const createOrder = async function (req, res) {
  let data = req.body;
  let isFree=req.headers.isFreeAppUser
  if(!isFree){
    return res.send({ mes:"require header not present"})
  }
  let user=await UserModel.findById({_id:data.userId})
  let product=await productdocumentModel.findById({_id:data.productId})
  if(!user || !product){
  return res.send({ mes:"user or prodect id does not exist"})
  }
  let savedData = await OrderModel.create(data);
  res.send({ data: savedData });
};

module.exports = { createOrder };

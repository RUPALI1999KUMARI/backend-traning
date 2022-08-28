const order=require("../models/OrderdocumentModel")
const UserModel = require("../models/userdocumentModel");
const productdocumentModel = require("../models/productdocumentModel");

const createOrder = async function (req, res) {
let data = req.body;
console.log (data)
  let user=await UserModel.findById({_id:data.userId})
  let product=await productdocumentModel.findById({_id:data.productId})
  if(!user || !product){
  return res.send({ mes:"user or prodect id does not exist"})
  }
  if(data.isfreeappuser=="true"){
     data.isFreeAppUser=true
   data.amount= 0
   }else{
    data.isFreeAppUser=false
    data.amount=product.price
   }
  let savedData = await order.create(data);
  if(data.isfreeappuser=="false"){
   user.balance= user.balance-product.price
   }
  user.save()
  res.send({ data: savedData });
};

module.exports = { createOrder };

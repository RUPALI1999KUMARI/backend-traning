const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
  let data = req.body;
  let savedData = await userModel.create(data);
   return res.status(201).send({ msg: savedData });
  }catch(err){
    return res.status(500).send({status : false,mess:err.message})
  }
};

const userLogin = async (req, res) => {
  try{
  const {   emailId, password } = req.body;
  let user = await userModel.findOne({   emailId:   emailId, password: password });
  if (user) {
    let payload = { userId: user._id,   emailId:   emailId };
    const generatedToken = jwt.sign(payload, "rupaliSecretKey");
    return res.status(200).send({
      status: true,
      token: generatedToken,
    });
  } else {
    return res.status(400).send({ status: false, message: "Invalid credentials" });
  }
}catch(err){
  return res.status(500).send({status : false,mess:err.message})
}
};

const getUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(400).send("No such user exists");
  }
 return res.status(200).send({ status: true, data: user });
}catch(err){
  return res.status(500).send({status : false,mess:err.message})
}
};

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(400).send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
  return res.status(200).send({ status: true, data: updatedUser });
}catch(err){
  return res.status(500).send({status : false,mess:err.message})
}
};

const deleteUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(400).send("No such user exists");
  }
  let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true });
  return res.status(200).send({ status: true, data: deletedUser });
}catch(err){
  return res.status(500).send({status : false,mess:err.message})
}
};


module.exports={createUser,userLogin,getUser,updateUser,deleteUser}
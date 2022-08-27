const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const userLogin = async (req, res) => {
  const {   emailId, password } = req.body;
  let user = await userModel.findOne({   emailId:   emailId, password: password });
  if (user) {
    let payload = { userId: user._id,   emailId:   emailId };
    const generatedToken = jwt.sign(payload, "rupaliSecretKey");
    return res.send({
      status: true,
      token: generatedToken,
    });
  } else {
    return res.send({ status: false, message: "Invalid credentials" });
  }
};

const getUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }
  res.send({ status: true, data: user });
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
  res.send({ status: true, data: updatedUser });
};

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }
  let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true });
  res.send({ status: true, data: deletedUser });
};

module.exports={createUser,userLogin,getUser,updateUser,deleteUser}
const UserModel = require("../models/userdocumentModel");

const createUser = async function (req, res) {
  let data = req.body;
  data.isFreeAppUser=req.headers.isfreeappuser
  let user = await UserModel.create(data);
  res.send(user);
};

module.exports={createUser}    
//Get all headers from request
//     console.log("Request headers before modificatiom",req.headers)
//     //Get a header from request
//     console.log(req.headers.batch)
//     console.log(req.headers["content-type"])
//     console.log(tokenDataInHeaders)
//     //Set a header in request
//     req.headers['month']='June' //req.headers.month = "June"

//     //Set an attribute in request object
//     req.anything = "everything"

//     console.log("Request headers after modificatiom",req.headers)

//     //Set a header in response
//     res.header('year','2022')

//     res.send({msg: "Hi"})

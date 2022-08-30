const jwt = require("jsonwebtoken");

// ============================= authentication================================//

const authenticator = async function (req, res, next) {
    try{
    let token = req.headers["x-auth-token"];
    if (!token) {
        return res.status(400).send({
            status: false,
            message: "You are not logged in, Please login to proceed your request",
        });
    }
    let decodedToken = jwt.verify(token, "rupaliSecretKey");
    if (decodedToken) {
        req.userId=decodedToken.userId
        next();
    } else {
        return res.status(400).send({ status: false, message: "Token is not valid" });
    }
}catch(err){
    return res.status(500).send({status : false,mess:err.message})
  }
};
// ============================= authorization================================//

const authorizer = function (req, res, next) {
    try{
    let paramsId = req.params.userId;
    if (!(req.userId == paramsId)) {
        return res.status(401).send({ status: false, message: "you are not authorize" });
    } else {
        next();
    }
}catch(err){
    return res.status(500).send({status : false,mess:err.message})
  }
};

module.exports = { authenticator, authorizer };

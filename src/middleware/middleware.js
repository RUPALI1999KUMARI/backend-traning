const jwt = require('jsonwebtoken')

const checkAuth = async function (req, res, next) {
        let token = req.headers['x-auth-token']
        if (!token) {
            return res.send({ status: false, message: 'You are not logged in, Please login to proceed your request' })
        }
        let decodedToken = jwt.verify(token, "rupaliSecretKey")
        if (decodedToken) {
            next();
        } else {
            return res.send({ status: false, message: 'Token is not valid'})
        }
    }
 module.exports={checkAuth}
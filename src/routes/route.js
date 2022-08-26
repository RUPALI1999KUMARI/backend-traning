const express = require('express');
const router = express.Router();

const myproductcontroller=require("../controllers/productdocumentController")
const myUserController=require("../controllers/userdocumentController")

let headerValidaror=function(req,res,next){
 
    let myHeader=req.headers. isfreeappuser
   if(!myHeader){
        return res.send({mes:"required header is not present"})
    }else{
        next()
    }
}

router.post("/myCreateProduct",myproductcontroller.createproduct)
router.post("/myCreatreUser" ,headerValidaror,myUserController.createUser)





module.exports = router;
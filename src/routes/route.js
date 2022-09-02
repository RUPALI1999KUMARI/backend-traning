const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherStatus=require("../controllers/weatherController")
const memecreation=require("../controllers/memeCreation")

router.get("/weather", weatherStatus.weather)
router.get("/memecreation12",memecreation.image)
router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/districtsInState/:DistrictsId", CowinController.vaccinationsessionsDistrictsId)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;
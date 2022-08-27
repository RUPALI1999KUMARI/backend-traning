const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require("../middleware/middleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )
router.post("/login", userController.userLogin)
router.get("/users/:userId",middleware.checkAuth, userController.getUser)
router.put("/users/:userId",middleware.checkAuth, userController.updateUser)
router.delete("/users/:userId",middleware.checkAuth, userController.deleteUser)

module.exports = router;
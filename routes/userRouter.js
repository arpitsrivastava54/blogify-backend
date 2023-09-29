const express = require("express");
const router = express.Router();
const {getAlluserData,registerUser,loginUser} = require("../controllers/userControllers");




router.get("/",getAlluserData);
router.post("/register",registerUser);
router.post("/login",loginUser);




module.exports = router;
const express = require('express');
const router = express.Router();
const {sendRestaurantData,sendFoodData,signUp,signIn,order}= require("../functions.js")
const {verifyToken}=require("../middleware/verification.js")

// const {handelUserSignUp,handelUserLogin}=require('../controller/handelAuthentication');
// const {handelUpdate}=require('../controller/handelUpdate.js');
// const {restrictToLoggedInUser}=require("../middleware/auth")//middleware
// const {allowCrossDomain}=require("../middleware/corsMiddleware")


router.get('/restaurant',sendRestaurantData)
router.get("/food",sendFoodData)
router.get("/*",)

router.post('/signin',signIn)  
router.post('/signup',signUp)
router.post('/order',verifyToken,order)


// router.get("")
// router.post("/signup",handelUserSignUp);
// router.post("/login",handelUserLogin);
// router.post("/update",restrictToLoggedInUser,handelUpdate);


module.exports=router;
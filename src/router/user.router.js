import express from "express";
import registerUser from "../controller/registerUser.controller.js";
import loginUser from "../controller/loginUser.controller.js";
import logOut from "../controller/logOut.controller.js";

const router=express.Router()
router.get('/signup',(req,res)=>{
    return res.render('signUp')
})
router.post('/user_registration',registerUser)

router.get('/login',(req,res)=>{
    return res.render('login')
})
router.post('/loginUser',loginUser)
router.get('/logOut',logOut)
export default router
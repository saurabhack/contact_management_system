import express from "express";
const router=express.Router()

router.get('/',(req,res)=>{
    console.log("user ", req.user)
    return res.render('home',{
        user:req.user
    })
})

export default router
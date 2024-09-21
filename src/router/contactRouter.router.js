import express from "express";
import addContact from "../controller/addContact.conroller.js";
import Contact from "../models/contact.models.js";
import updateController from "../controller/updateContact.controller.js";
import deleteContact from "../controller/deleteContact.controller.js";

const router=express.Router()

router.get('/addContact',(req,res)=>{
    return res.render('addContact',{
        user:req.user
    })
})
router.post('/createContact',addContact)

router.get('/showContacts',async (req,res)=>{
    const user=req.user
    const data= await Contact.find({createdBy:user._id})
    return res.render('showContact',{
        contacts:data
    })
})
router.get('/edit/:id', async (req,res)=>{
    const contact= await Contact.findById(req.params.id)
    console.log(contact)
    return res.render('editContact',{
        contact
    })

})
router.post('/update/:id',updateController)

router.post('/delete/:id',deleteContact)

export default router
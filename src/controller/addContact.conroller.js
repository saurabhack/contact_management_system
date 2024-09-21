import Contact from "../models/contact.models.js"

async function addContact(req,res){
    const {name,email,mo_number}=req.body
    console.log("user id",req.user._id)
    const userId=req.user._id
    if(!name || !email || !mo_number){
        res.render('addContact',{
            err:"all fields are required"
        })
    }else{
        await Contact.create({
            name,
            email,
            mo_number,
            createdBy:userId
        })
        res.redirect('/')
    }
}
export default addContact
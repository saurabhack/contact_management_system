import Contact from "../models/contact.models.js"

async function updateController(req,res){
    const {name,email,mo_number}=req.body
    const contact= await Contact.findById(req.params.id)
    await contact.updateOne({name,email,mo_number})
    return res.redirect('/contact/showContacts')
}
export default updateController
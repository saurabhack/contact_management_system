import Contact from "../models/contact.models.js"

async  function deleteContact(req,res){
    await Contact.findByIdAndDelete(req.params.id)
    return res.redirect('/contact/showContacts')
}
export default deleteContact
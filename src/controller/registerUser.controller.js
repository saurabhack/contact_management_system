import User from "../models/user.models.js"

async function registerUser(req,res){
    const {firstName,lastName,email,password,password2} = req.body
    const isUser= await User.find({email}) 
    

    if(!firstName || !lastName || !email || !password || !password2){
        return res.render('signup',{
            err:"all fields are required"
        })
    }else if(password !== password2){
        return res.render('signup',{
            err:"password does not matched"
        })
    }else if(isUser.length!==0){
        return res.render('signup',{
            err:"user is already exists"
        })
    }else{
        await User.create({
            firstName,
            lastName,
            email,
            password
        })
        return res.redirect('/')
    }

}

export default registerUser
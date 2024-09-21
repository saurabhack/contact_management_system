import User from "../models/user.models.js";


async function loginUser(req,res){
    const {email,password}=req.body;
    console.log("email",email)
    console.log("password",password)
    try {
    const token= await User.matchPasswordAndGenerateToken(email,password)
    return res.cookie('token',token).redirect('/')
    } catch (error) {
        return res.render('login',{
            err:'wrong email id or password'
        })    
    }
}

export default loginUser
import {createHmac,randomBytes} from "crypto"
import mongoose from "mongoose";
import service from "../service/authentication.service.js"
const {createTokenForUser}=service
const user=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    salt:{
        type:String
    },

})

user.pre('save',function(next){
    const user=this
    if(!user.isModified) return
    const salt=randomBytes(16).toString()
    const hashedPassword=createHmac('sha256',salt).update(user.password).digest('hex')
    this.salt=salt
    this.password=hashedPassword
    next()
})
user.static('matchPasswordAndGenerateToken',async function(email,password){
    const user=await this.findOne({email})
    if(!user) throw new Error("user not found");
    const salt=user.salt;
    const hashedPassword=user.password
    const userProvidedHash=createHmac('sha256',salt)
    .update(password)
    .digest('hex')

    if(hashedPassword!== userProvidedHash) throw new Error("password is");
    
    const token=createTokenForUser(user)
    return  token

})
const User=new mongoose.model("user",user)
export default User
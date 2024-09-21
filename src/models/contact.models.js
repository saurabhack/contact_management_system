import mongoose, { model, Schema, Types } from "mongoose"

const contact=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    mo_number:{
        type:String,
        required:true
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        refer:"user"
    }
})
const Contact=new model("contact",contact)

export default Contact
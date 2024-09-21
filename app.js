import express from "express";
import mongoose from "mongoose";
import path from "path"
import cookieParser from "cookie-parser";
import handleStaticRouter from "./src/router/staticRouter.router.js"
import handleUserRouter from "./src/router/user.router.js"
import checkForAuthenticationCookies from "./src/middleware/authentication.middleware.js";
import handleContactRouter from "./src/router/contactRouter.router.js"
const app=express()

app.set('view engine','ejs')
app.set('views', path.resolve('./src/views'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(checkForAuthenticationCookies('token'))
app.use('/',handleStaticRouter)
app.use('/user',handleUserRouter)
app.use('/contact',handleContactRouter)
const port=800

mongoose.connect('mongodb://127.0.0.1:27017/contactManagement').then(()=>{
    console.log("mongodb is connected")
}).catch((err)=>{
    console.log(err)
})

app.listen(port,()=>{
    console.log(`server is listening on the port of = http://localhost:${port}`)
})




function logOut(req,res){
    return res.clearCookie('token').redirect('/')
}
export default logOut
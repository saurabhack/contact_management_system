import JWT from "jsonwebtoken"
const secret='$uoer@Man123'

function createTokenForUser(user){
    const payload={
        _id:user._id,
        email:user.email,
        firstName:user.firstName,
        lastName:user.lastName
    }
    const token = JWT.sign(payload,secret)
    return token
}
function validateToken(token){
    const payload = JWT.verify(token,secret)
    return payload
}

export default {createTokenForUser, validateToken}
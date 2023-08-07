require('dotenv').config();
const  jwt_decode =require('jwt-decode');
const { sign, verify }=require("jsonwebtoken");

const secret ="PPGTHEGRATMASTEROFTHEWORLD987WHICHISUNCONCURED" || process.env.SECRET

//setuser
function setUser(user){
     console.log(user.email,"inside setuser,getusr")

    // console.log(sign(user,secret,{}))
 return (sign({"email" : user.email},secret,{expiresIn: '1h',}))
}

//verify
function verifyUser(token){
    if(!token){return (null)}
        const varifed=verify(token,secret);
        return(varifed)
}
function decodeToken(token){
    const decodedToken = jwt_decode(token);
    return(decodedToken.email)
}

module.exports= {setUser,verifyUser,decodeToken}
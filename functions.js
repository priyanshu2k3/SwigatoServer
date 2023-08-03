const restaurant =require( "./New folder/archive/file1.json")
const food=require("./New folder/archive/food.json")
const {setUser}=require("./utilites/autherization.js")
const {User}=require("./mongodbSchema/userSchema.js")
const{decodeToken}=require("./utilites/autherization.js")
const bcrypt = require('bcrypt');


function sendRestaurantData(req,res){
    return(res.send(restaurant))
}

function sendFoodData(req,res){
    return(res.send(food))
}


//sign up process "creation of new user "
async function  signUp(req,res){
    // console.log(req.body.email)

try {
    if (req.body.email !=="" && req.body.password !==""){
        await User.create(
            {email:req.body.email,
             password:req.body.password,
             name:req.body.name})
        return(res.status(200).send("user added sucessfully"))
    }
    else{return(res.send("all fields are required"))}
} catch (error) {
    console.log(error ,"error in adding the user")
    return (res.status(417).send({"failed":error}))
    
}

}

//sign in process
async function signIn(req,res){
    var cookie="";
    var user={};

    if (req.body.email==="" || req.body.password==="" ){return(res.status(403).send("email and the password both required"))}

        try {
            const email=req.body.email;
            // console.log(req.body)
            user = await User.findOne({"email": email }); // Find the user by their email
            // console.log(!user,"in the function.js signin part")
            if(!user){    return (res.status(417).send({"msg":"no such user exist"}))}

            const dbPassword=String(user.password)
            const UserPassword=String(req.body.password)
            const isMatch = await bcrypt.compare(UserPassword, dbPassword)  // Compare
                if(isMatch){
                    cookie=setUser(req.body)
                    return (res.status(200).send({"cookie":cookie,"msg":"sucess","name":user.name}))
                    }
                else
                {return(res.status(401).send({"msg":"wrong password or email"}))}

          } catch (error) {
            console.log('Error fetching user by email:', error);
            return(res.status(417).send({"Failed":error}))
            throw error; // Rethrow the error to handle it further up the call stack
          }

}

function order(req,res){
   const email= decodeToken(req.body.headers.token)
    console.log(req.body.cart ,"from", email)
    return(res.status(200).send({msg:"order recived"}))}
            


module.exports={sendRestaurantData,sendFoodData,signUp,signIn,order}
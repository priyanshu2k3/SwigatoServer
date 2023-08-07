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
        return(res.status(200).send({"msg":"user added sucessfully","status":200}))
    }
    else{return(res.send({"msg":"all fields are required","status":400}))}
} catch (error) {
    console.log(error ,"error in adding the user")
    return (res.send({"failed":error,"status":417}))
    
}

}

//sign in process
async function signIn(req,res){
    var cookie="";
    var user={};

    if (req.body.email==="" || req.body.password==="" ){return(res.send("email and the password both required"))}

        try {
            const email=req.body.email;
            // console.log(req.body)
            user = await User.findOne({"email": email }); // Find the user by their email
            // console.log(!user,"in the function.js signin part")
            if(!user){    return (res.send({"msg":"no such user exist","status":417}))}

            const dbPassword=String(user.password)
            const UserPassword=String(req.body.password)
            const isMatch = await bcrypt.compare(UserPassword, dbPassword)  // Compare
                if(isMatch){
                    cookie=setUser(req.body)
                    return (res.status(200).send({"cookie":cookie,"msg":"sucess","name":user.name,"status":200}))
                    }
                else
                {return(res.send({"msg":"wrong password or email","status":401}))}

          } catch (error) {
            console.log('Error fetching user by email:', error);
            return(res.send({"Failed":error,"status":417}))
            throw error; // Rethrow the error to handle it further up the call stack
          }

}

function order(req,res){
   const email= decodeToken(req.body.headers.token)
    console.log(req.body.cart ,"from", email)
    return(res.status(200).send({msg:"order recived","status":200}))}
            


module.exports={sendRestaurantData,sendFoodData,signUp,signIn,order}
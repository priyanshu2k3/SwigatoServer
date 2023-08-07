const express = require('express')
const cors=require("cors")
const Router=require("./router/routes.js")
const mongoose = require ("mongoose")
require('dotenv').config
const cookieParser = require('cookie-parser');

//var data= require("./data.txt")
//data=JSON.parse(data)
const app = express()

const uri ="mongodb+srv://ppg2k3:jBF8d191zeJl5LLY@zwigato.rxoljhr.mongodb.net/?retryWrites=true&w=majority" ||process.env.URI

///mogodb connecting
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true,})
.then(()=>{console.log("db is connected")})
.catch((e)=>console.log("error in mongodb ",e))




// 
require('dotenv').config();
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors(withCredentials = true));
app.use(cookieParser());

const port = 6969 ||process.env.PORT ||8080;

app.use("/",Router)


app.listen(port, () => {
  console.log(`app listening on port ${port}`,)
})
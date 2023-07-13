const express = require('express')
const cors=require("cors")
var fs = require('fs');
const data= require("./New folder/archive/file1.json")
const app = express()

require('dotenv').config();


const port = process.env.PORT ||8080;

console.log(port)


app.use(cors())
app.get('/', (req, res) => {


  console.log(1)
  res.send(data)
})


app.post('/', (req, res) => {
    res.send('post req Hello World!')
  })
  




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
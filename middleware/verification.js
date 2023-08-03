const express = require('express');
const { verifyUser } =require("../utilites/autherization");
function verifyToken(req, res, next) {
    const token = req.body.headers.token;
    // console.log(req.body,"headers")
  
    if (!token) {

      return res.json({ msg: 'Authentication failed Sign in First. ' });
    }
  const result=verifyUser(token);
      if(!result){return res.json({ msg: 'Authentication failed. Need to SignIn once again.' });}
    
      else{next();}
    
  }
  module.exports={verifyToken}
  
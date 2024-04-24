//express jada acha h kynki isme baar baar if-else ni likhna pdta 
//kch built-in features hote h
//ex-status code ni defie krna pdta etc.
const express = require('express');
const app = express();
const passport= require("./auth");
//const person= require('./model/person');
//Authentication Middleware-----> veryfying users based on the their credentials such as username, password etc.
//Authorized Middleware-----> once authentication is done, users are authorized (allow access) based on thir roles, permissions etc.
//Passport.js-----> authentication middleware which makes authorization easier for node.js developers 


require('dotenv').config();
const db= require("./db");
const bodyParser=require("body-parser");

const PORT = process.env.PORT ||3000;
// body-parser automatiacally parses the json data from request body nad converts it into javascript object which is then stored in req.body
// data in request body could be a text, html, json etc. 
app.use(bodyParser.json());

//Middleware------> behind the scenes actions that a process goes through between the request and response.
//logrequest------> abhi tak jitne bhi date aur tym pe url hit hua h usko log krnwana

const logRequest=(req, res ,next)=>{//Middleware function
  //console.log(new Date().toLocaleString() ,'Request made to: ' ,req.originalUrl); //this is also correct
  console.log(`${new Date().toLocaleString()} Request made to:${req.originalUrl}`);
  next(); // used to move to the next phase
}
app.use(logRequest); //to use logRequest in for every api


app.use(passport.initialize());
const localAuthMiddleware=passport.authenticate('local', {session:false});

const personRoutes=require("./routes/personRoutes");
app.use('/person', personRoutes);
const menuRoutes=require("./routes/menuRoutes");
const { jwtAuthMiddleware } = require('./jwt');
app.use('/menu', menuRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
}) 

///note: this is bad practice to build apis as we have lots of endpoints (api) in this in a single file.
//code readability and code handling is very poor.
//thats why express router is used. 
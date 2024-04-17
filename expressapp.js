//express jada acha h kynki isme baar baar if-else ni likhna pdta 
//kch built-in features hote h
//ex-status code ni defie krna pdta etc.
const express = require('express')
const app = express()
const port = 3000
const db= require("./db");
const bodyParser=require("body-parser");
// body-parser automatiacally parses the json data from request body nad converts it into javascript object which is then stored in req.body
// data in request body could be a text, html, json etc. 
app.use(bodyParser.json());


const personRoutes=require("./routes/personRoutes");
app.use('/person' , personRoutes);

const menuRoutes=require("./routes/menuRoutes");
app.use('/menu' , menuRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 

///note: this is bad practice to build apis as we have lots of endpoints (api) in this in a single file.
//code readability and code handling is very poor.
//thats why express router is used. 
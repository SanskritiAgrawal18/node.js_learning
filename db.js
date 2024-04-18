const mongoose=require("mongoose");
require('dotenv').config();
const bodyParser = require("body-parser");

//define connection url
//const mongoURL_local="mongodb://127.0.0.1:27017/emplyoees" // replce emplyees with database name
//const mongoURL="mongodb+srv://Sanskriti_Agrawal:Sans1234@cluster0.wslna7i.mongodb.net/"

const mongoURL=process.env.mongoURL; // connection to online mongo db
// const mongoURL=process.env.mongoURL_local; // connection to local mongo db
mongoose.connect(mongoURL,
	{
		useNewUrlParser: true, // isko ni likhenge to connection error aa skta h
		useUnifiedTopology: true // same as above
	});

    const db= mongoose.connection;

    //Event listeners for database connection
    db.on('connected',()=>{
        console.log("Connected to MongoDB server");
    })
    db.on('error',(err)=>{
        console.log("MongoDB connection error", err);
    })
    db.on('disconnected',()=>{
        console.log("MongoDB disconnected");
    })

 module.exports=db;
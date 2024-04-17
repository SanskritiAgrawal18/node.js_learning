const mongoose= require('mongoose');
//schema=blueprint of your database
const menuSchema = new mongoose.Schema({
	name:{
        type:String,
        required:true 
    },
    type:{
        type:String,
        enum:['Italian','Indian','Chinese'],
        required:true,
        default:'Indian'
    },
    cost:{
        type:Number,
        required:true,
        default:0
    }
    
});

const menuItem =
	mongoose.model("menuItem", menuSchema);


module.exports=menuItem;
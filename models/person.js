const mongoose= require('mongoose');
const bcrypt=require('bcrypt');
//schema=blueprint of your database
const personSchema = new mongoose.Schema({
	name:{
        type:String,
        required:true 
    },
    age:{
        type:Number,
    
    },
    work:{
        type:String,
        required:true,
        enum:['AWS' ,'web developer', 'designer'],
        default:'AWS'
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
//Middleware functn used to hash the password
personSchema.pre('save',async function(next){
    const person=this;
//if user is updating pasword or if a new user is created =password is modified
    if (!person.isModified('password'))
        return next();
        
    try{
//entered pass +salt =new pass
//10 is a just a number to make the salt complex. greater the number, greater is the complexity
      const salt=await bcrypt.genSalt(10);
      const hashedPassword= await bcrypt.hash(person.password, salt);
      person.password=  hashedPassword;
      next();
        
    }catch(err){
        return next(err); 
    }
})
// to compare entered password with the original pass 'compare' functn just extracts the salt from the original pass and then add it to enterd pass, if both are same then it returns true
personSchema.methods.comparePassword = async function(enteredPassword){
    
    try{
        const person=this;
        const isMatch= await bcrypt.compare(enteredPassword, person.password);
        return isMatch;
    }catch(err){
        throw new Error("Error comparing passwords: " + err.message);
    }
}
const person =
	mongoose.model("person", personSchema);
module.exports=person;
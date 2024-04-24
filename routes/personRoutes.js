const express=require('express');
const router= express.Router();
const person=require('./../models/person');// double dot isliye kyunki models do file piche hai
const {jwtAuthMiddleware,generateToken}=require('./../jwt');
router.get('/', (req, res) => {
    res.send('Hello World!')
  })
router.post('/signup',async(req, res)=>{
    //async=asynchronous functn mtlb iss function(data ko save krne me) time lg skta h
    try{
      const data= req.body; //data converted by body-parser
      const newPerson=new person(data);
      // newPerson.save((error, person)=>{
      //   if(error){
      //     console.log("Error saving person", error);
      //     res.status(500).json({error:'Internal server error'});//status 500 for server error
      //   }else{
      //     console.log("Person saved successfully");
      //     res.status(200).json(person);//200 ok status
      //   }
      // })
  
      //upar wala method sahi h but aajkl use ni hota ye modify hogya h async aur await me
      const response=await newPerson.save() 
      //await= asynchronous code mtlb jbtk ye cheez resolve ni ho jati hmko wait krna h
      console.log("data saved successfully");
      const payload={
        id:response.id,
        usename:response.username
      
      }
      const token=generateToken(payload);
      res.status(200).json({response:response , token:token});
  
    }catch(err){
  console.log(err);
  res.status(500).json({error:'Internal server error'});
    }
  })
  router.post('/login' , async(req, res)=>{

    try{
      const {username,password}=req.body;
      const user = await person.findOne({username:username});
      if(!password){
        return res.status(401).json({message:"Enter your password"}); 
      }

      if(!user || !(await user.comparePassword(password))){
        return res.status(401).json({error:'Invalid username or password'})
      }
      const payload={
        id:user.id,
        username:user.username
      }
      const token=generateToken(payload);
      res.status(200).json({response:user , token:token});
  
    }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
    }

  })
router.get('/getall',jwtAuthMiddleware, async (req, res) => {
    try{
      const data =await person.find();
      console.log(data);
      res.status(200).send(data);
    }catch(err){
  console.log(err);
  res.status(500).json({err:"Something went wrong"});
    }
  })
// router.get('/:workType',async (req, res) => {//':'== kyunki work type vary krega
//     try{
//       const workType=req.params.workType; // extract the work type from url param
//       if(workType=='AWS'||workType=='designer'||workType=='web developer'){// validation
//       const data =await person.find({work:workType});
//       console.log(data);
//       res.status(200).send(data);
//       }else{
//       console.log("Invalid work type...!");
//       res.status(404).json({err:"Invalid work type..."});
//       }
//     }catch(err){
//   console.log(err);
//   res.status(500).json({err:"Something went wrong"});
//     }
//   })
  router.get('/profile',jwtAuthMiddleware,async (req, res) => {
    try{
      const userData= res.user;
      console.log(userData);
      const id=userData.id;
      const response=await person.findById(id);
     
      return res.status(200).json({response:response});
    }catch(err){

  console.log(err);
  res.status(500).json({err:"Something went wrong"});
    }
  })

  module.exports=router;
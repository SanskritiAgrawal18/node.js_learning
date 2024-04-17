const express=require('express');
const router= express.Router();
const person=require('./../models/person');// double dot isliye kyunki models do file piche hai

router.get('/', (req, res) => {
    res.send('Hello World!')
  })
router.post('/',async(req, res)=>{
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
      res.status(200).json(response);
  
    }catch(err){
  console.log(err);
  res.status(500).json({error:'Internal server error'});
    }
  })
router.get('/getall',async (req, res) => {
    try{
      const data =await person.find();
      console.log(data);
      res.status(200).send(data);
    }catch(err){
  console.log(err);
  res.status(500).json({err:"Something went wrong"});
    }
  })
router.get('/:workType',async (req, res) => {//':'== kyunki work type vary krega
    try{
      const workType=req.params.workType; // extract the work type from url param
      if(workType=='AWS'||workType=='designer'||workType=='web developer'){// validation
      const data =await person.find({work:workType});
      console.log(data);
      res.status(200).send(data);
      }else{
      console.log("Invalid work type...!");
      res.status(404).json({err:"Invalid work type..."});
      }
    }catch(err){
  console.log(err);
  res.status(500).json({err:"Something went wrong"});
    }
  })

  module.exports=router;
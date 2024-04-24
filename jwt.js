//JWT---->JSON Web Token
//JWT consists of 3 parts:-header, payload, and signature
//JWTs are used for authentication and authorization
//statelessness---> means jWT k case me server ko session info store krne ki need ni hoti  while session k case me hoti h
//struc of JWT tokens--
//working--> user signin /login krega to username aur pass(paload) enter krega , jwt usme kch salt add krke client ko return krdega, phr jb bhi vo koi endpoint ko hit krega to vo token bhejega, agr token shi hhoga to usko info mil jaega
//2 imp mthds-->jwt.sign() and jwt.verify()
const jwt=require('jsonwebtoken');
const jwtAuthMiddleware=(req, res, next)=>{
    const authorization=req.headers.authorization;
    if(!authorization){
            return res.status(401).json({error:"Token not found"});
    }
    const token=req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({error:'Token not found'});
    try{
    const decoded=jwt.verify(token, process.env.JWT_SECRET);
    //jo bhi decoded payload aaya usko vapas server me bhej re h
    res.user=decoded;
    next();
    }catch(err){
console.log(err);
return res.status(401).json({error:'invalid token'});
    }
}

const generateToken=(userData)=>{
    //used to geerate token using payload and secret key
   // return jwt.sign(userData, process.env.JWT_SECRET,{expiresIn:40}); //to set expiry time for a token
   return jwt.sign(userData, process.env.JWT_SECRET);
}
module.exports={jwtAuthMiddleware,generateToken};
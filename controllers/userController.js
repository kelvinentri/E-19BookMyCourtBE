const USERS =require('../models/userSchema')

const doSignUp=(req,res)=>{
    try {
        USERS({name:req.body.name,
            email:req.body.email,
            password:req.body.pass,
            }).save().then((resp)=>{
                console.log(resp,"res after user creation");
                res.status(200).json({message:'signup successfull'})
            })
            
    } catch (error) {
        console.log(error)
        res.status(403).json({message:'signup failed'})
    }

}
const doLogin=async(req,res)=>{
const userDetails=await USERS.findOne({email:req.body.email})
if(userDetails){
    if(userDetails.password===req.body.password){
        res.status(200).json({message:'Login successfull'})
    }

}else{
    res.status(401).json({message:'invalid credentials'})
}

}


module.exports={doSignUp,doLogin}
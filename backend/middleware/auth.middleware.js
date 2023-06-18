const jwt=require("jsonwebtoken")
const { BlacklistModel } = require("../models/token.model");


const auth=async(req,res,next)=>{
    try{
        const token=req.headers.authorization?.split(" ")[1] || null;
        if(token){
            let existingToken=await BlacklistModel.find({
                blacklist:{$in:token},
            })
            if(existingToken.length > 0){
                return res.status(400).send({error:"Please Login Again"});
            }
            let decoded=jwt.verify(token,"masai");
            req.body.userID=decoded.userID;
            return next()
        }else{
            res.status(400).send("Please Login First"); 
        }
    }catch(err){
        return res.status(400).send(err);
    }
}

module.exports={
    auth
}
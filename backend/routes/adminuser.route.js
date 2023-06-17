const express=require("express");
const { AdminUserModel } = require("../models/adminuser.model");
const { BlacklistModel } = require("../models/token.model");
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken');
const { adminGoogleSignup } = require("../controller/admin");

const adminuserRouter=express.Router()

adminuserRouter.post("/register",async(req,res)=>{
    const {name,email,phone,password}=req.body

    const passwordReq=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordReq.test(password)) {
        return res.status(400).json({ msg:'Invalid password format! Password format Should contain atleast one uppercase character,one number , special character and length greater then 8'});
      }

    try{
    const existingUserEmail = await AdminUserModel.findOne({email});
    if (existingUserEmail) {
        return res.status(400).json({ msg:'Admin Already Exists'});
      }
    bcrypt.hash(password,5,async(err,hash)=>{
        if(err){
            res.status(400).json({error:err.messag})
        }else{
            const adminuser=new AdminUserModel({name,email,phone,password:hash})
            await adminuser.save()
        }
    })
    res.status(200).json({msg:"The new Admin has been registered",registeredAdmin:req.body})
    }catch(err){
        res.status(400).json({error:err.messag})
    }
})


adminuserRouter.post("/login",async(req,res)=>{
    const { email, password } = req.body;

    try{
        const adminuser = await AdminUserModel.findOne({ email });
        if (adminuser) {
           bcrypt.compare(password,adminuser.password,function(err,result){
            if(result){
                var token=jwt.sign({_id:adminuser._id},"hs",{
                    expiresIn:120
                  })
                var refreshToken=jwt.sign({_id:adminuser._id},"admin",{
                    expiresIn:300
                  })
                res.status(200).json({msg:"Login successful!",token:token,refreshToken:refreshToken})
            }
           })

        }else{
            res.status(200).json({msg:"Admin Not Found"})
        }

    }catch(err){
          return res.status(400).json({ error: err.messag});
    }
})

adminuserRouter.get("/logout",async(req,res)=>{
    try{
    const token=req.headers.authorization?.split(" ")[1] || null
    if(token){
        await BlacklistModel.updateMany({},{$push:{blacklist:[token]}})
        res.status(200).json({msg:"Logout Successful!"})
    }    
    }catch(err){
        res.status(400).json({error:err.messag})
    }
})

adminuserRouter.get("/refreshtoken",(req,res)=>{
    const refreshToken=req.headers.authorization?.split(" ")[1]
    const decoded=jwt.verify(refreshToken,"admin")
if(decoded){
    let newToken=jwt.sign({_id:decoded._id},"hs",{
        expiresIn:120
      })
      res.status(200).json({msg:"newToken",newToken})
}else{
    res.status(400).json({error:err.message})
}
})

adminuserRouter.route('/admingooglesignup').post(adminGoogleSignup);



module.exports={
    adminuserRouter
}

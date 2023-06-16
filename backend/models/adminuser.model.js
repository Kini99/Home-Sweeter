const mongoose=require("mongoose")

const adminuserSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    password:String
},{
    
    versionKey:false
})

const AdminUserModel=mongoose.model("adminuser", adminuserSchema)

module.exports={
    AdminUserModel
}
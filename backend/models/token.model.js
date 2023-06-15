const mongoose=require("mongoose");

const blacklistSchema=new mongoose.Schema({
    blacklist:{type:[String]},
})

const BlacklistModel=mongoose.model("blacklist",blacklistSchema);

module.exports={
    BlacklistModel
}
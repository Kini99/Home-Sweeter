const express=require("express");
const { connection } = require("./db");

require("dotenv").config();

const app=express();

// app.use(cors());
app.use(express.json());


app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("Server is running and db is connected")
    }catch(err){
        console.log(err)
    }
})
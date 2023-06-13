const express=require("express");
const { connection } = require("./db");
const {propertyRouter}=require("./routes/property.route");

require("dotenv").config();

const app=express();

// app.use(cors());
app.use(express.json());

app.use("/property",propertyRouter);

app.listen(process.env.PORT,async()=>{
    try{
        await connection;
        console.log("Server is running and db is connected")
    }catch(err){
        console.log(err)
    }
})
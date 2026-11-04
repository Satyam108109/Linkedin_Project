import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express";
import "dotenv/config";

import ConnectDB from "./config/db.js";

const app = express() ;

app.get("/" , (req , res)=>{
    res.send("Hello")
})

app.listen(process.env.PORT , async()=>{
   await ConnectDB() 
    console.log("Listening at port 3000")
})

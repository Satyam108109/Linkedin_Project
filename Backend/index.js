import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express";
import "dotenv/config";

import ConnectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express() ;
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin : "http://localhost:5173" ,  // this is url of frontend 
    credentials : true                                   
}))


app.use("/api/auth" , authRouter)

app.listen(process.env.PORT , async()=>{
   await ConnectDB() 
    console.log("Listening at port 3000")
})

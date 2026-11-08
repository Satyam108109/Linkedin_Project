import genToken from "../config/token.js"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signUp = async (req , res) =>{
try {
     const {firstName , lastName , userName , email , password} = req.body
    
     const existEmail =  await User.findOne({email})

    if(existEmail){
        return res.status(400).json({message : "email already exist !"})
    }

     const existUserName =  await User.findOne({userName})

    if(existUserName){
        return res.status(400).json({message : "userName already exist !"})
    }

    if(password.length < 8){
     return res.status(400).json({message : "Password must have atleast 8 character"})
    }
    
const hassedPassword = await bcrypt.hash(password , 10)

const user = await User.create({
    firstName ,   // here key and values are same so we write this as this 
    lastName , 
    userName ,
    email , 
    password : hassedPassword
})

const token = await genToken(user._id)

res.cookie("token" , token , {
    httpOnly : true ,
    maxAge : 7*24*60*60*1000 , 
    sameSite : "Strict",
    sacure : process.env.NODE_ENVIRONMENT === "production"
})

res.status(201).json(user)

} catch (error) {
    return res.status(500).json({message : "Server error"})
}
   

}
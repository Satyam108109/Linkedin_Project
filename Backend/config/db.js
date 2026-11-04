import mongoose from "mongoose";

const ConnectDB = async()=>{
    try {
       await  mongoose.connect(process.env.CONNECTION_STRING)
        console.log("DB connected")
    } catch (err) {
        console.log("Error!"+err )
    }
}
export default ConnectDB
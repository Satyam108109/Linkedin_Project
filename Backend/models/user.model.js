import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({

firstName : {
    type : String ,
    required : true
} ,

lastName : {
    type : String ,
    required : true
},
userName : {
    type: String ,
    required : true ,
    unique : true 

},
email : {
    type: String ,
    required : true ,
    unique : true 

},
password : {
    type: String ,
    required : true ,
},
profileImage : {
    type: String ,

},
coverImage : {
    type: String ,

},
headline : {
    type : String,
    default : ""
},
skills : [{type : string}],

education:[{
    college : {
        type: string
    },
    degree : {
        type: string
    },
    fieldOfStudy : {
        type: string
    },
}],

location:{
    type : string
},

gender : {
    type : string,
    enum : ["male" , "female" , "others"]
},

experience : [{
    title:{
        type : string
    },
  company:{
        type : string
    },

      description:{
        type : string
    }

}],


connection : [{ type: mongoose.Schema.Types.ObjectId}]




} , {timestamps : true})


const User = mongoose.model("User" , userSchema)

export default User

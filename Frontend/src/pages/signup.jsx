
import { useContext, useState } from "react"
import logo from "../assets/logo.svg"
import { useNavigate } from "react-router-dom"
import { authDataContext } from "../context/authContext"
import axios from "axios"
function Signup(){

    const [show , setShow] = useState(false)
    const nevigate = useNavigate()

const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const {serverUrl} = useContext(authDataContext)
   const handleSignUp = async (e)=>{
     e.preventDefault()
     try {
        const result = await axios.post(serverUrl + "/api/auth/signup" ,{
            firstName ,
            lastName,
            userName,          // here key and value is same 
            email,
            password
        }, {withCredentials : true})

        console.log(result)
     } catch (error) {
         console.log(error)
     }
   } 
    return (
        <div className="w-full  h-[90%] bg-[#ffffff8c] flex flex-col items-center justify-start" >
             <div className="p-[40px] lg:p-[35px] w-full">
                <img src={logo} alt="" />
             </div>
             
             <form className="w-[90%] max-w-[400px] h-[600px] md:shadow-xl flex flex-col justify-center p-[15px] gap-[10px]" onSubmit={handleSignUp}>
                <h1 className="text-gray-800 text-[30px] font-semibold mb-[30px]"> SignUp</h1>
                
                
                <input type="text" placeholder="First Name" required className="w-full h-[50px] border-2 border-gray-600 text-[18px] px-[20px] py-[10px] rounded-md  " value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>

                <input type="text" placeholder="Last Name" required className="w-full h-[50px] border-2 border-gray-600  text-[18px] px-[20px] py-[10px] rounded-md" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>

                <input type="text" placeholder="Username" required className="w-full h-[50px] border-2 border-gray-600 text-[18px] px-[20px] py-[10px] rounded-md" value={userName} onChange={(e)=>setUserName(e.target.value)} />

                <input type="email" placeholder="Email" required className="w-full h-[50px] border-2 border-gray-600 text-[18px] px-[20px] py-[10px] rounded-md" value={email} onChange={(e)=>setEmail(e.target.value)}/>

               <div className="w-full h-[50px] border-2 border-gray-600  text-[18px]  rounded-md overflow-hidden relative">

                 <input type={show?"text":"password"} placeholder="password" required className="w-full h-full border-none  text-[18px] px-[20px] py-[10px] rounded-md" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                 <span className="absolute right-[20px] top-[8px] text-[#2a2ad3]  font-semibold cursor-pointer " onClick={()=>setShow(prev=>!prev)}>
                    {show?"hide":"show"}
                    </span>
               </div>

                <button className="w-[100%] h-[50px] rounded-full bg-[#1818bc7a] mt-[40px] text-white">Sign Up</button>

                <p className="text-center cursor-pointer">Already have an account ? <span className="text-[#2a2ad3] " onClick={()=>nevigate("/login")}>SignIn</span></p>

             </form>
        </div>
    )
}
export default Signup
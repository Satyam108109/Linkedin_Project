import { createContext } from "react"

export const authDataContext = createContext()



function AuthContext({children}){

    const serverUrl = "http://localhost:3000"
    const value = {
       serverUrl
}
    return (
        <div>
           <authDataContext.Provider value={value}>
            {children} 
           </authDataContext.Provider>
        </div>
    )
}
export default AuthContext


// we are using this everywhere so we have to wrap our App in AuthContext
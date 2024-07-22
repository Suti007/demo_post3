import Axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
//we will keep information into this AuthContext
export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null)
    const login=async(inputs)=>{
        const res = await Axios.post("auth/login", inputs); 
        setCurrentUser(res.data) 
    }
    const logout=async(inputs)=>{
        await Axios.post("/auth/logout"); //We don't have endpoint yet,but write it in advance
        setCurrentUser(null) 
    }
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
      }, [currentUser]);
    
      return (
        <AuthContext.Provider value={{ currentUser, login, logout }}> 
        {/* we can pass prop จึงใช้ปีกกา2อัน */}
          {children}
        </AuthContext.Provider>
      );
}
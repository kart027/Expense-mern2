
import { Navigate,redirect } from "react-router-dom";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";

export default function CheckAuth({ children }) {
    const token = Cookie.get("token")
    const [isLoading,setisloading] = useState(false)
  

useEffect(()=>{
fetchuser();
},[])

    const fetchuser = async ()=>{
      setisloading(true);

      const res = await fetch('http://localhost:4000/user/getuser',{
        headers:{
          Authoriazation:`Bearer ${token}`
        }

      })
      setisloading(false)
      if(!res.ok){
        redirect("/login")
      }
    
    }
  
    if(isLoading){
      return<p>Loading</p>
    }
  return  children;
}
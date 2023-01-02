import  AppBar from "./components/AppBar";

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { Navigate,redirect ,useNavigate} from "react-router-dom";
import Cookie from "js-cookie";
import { getuser } from "./store/auth";




function App() {
  const token = Cookie.get("token")
  const [isLoading,setisloading] = useState(false)

  // const auth = useSelector((state)=> state.auth);
  const dispatch = useDispatch()
  

  useEffect(()=>{
    fetchuser();
  },[])


  const fetchuser = async ()=>{
    setisloading(true);

    const res = await fetch('http://localhost:4000/user/getuser',{
      method: "GET",
      headers:{
        Authoriazation:`Bearer ${token}`
      }

    })
    
    if(res.ok){
    const user = await res.json();
  
    dispatch(getuser(user))

    }
    setisloading(false);

    
  }


  if(isLoading){
    return<p>Loading..</p>
  }

  return (
    <>
    <AppBar/>
    <Outlet />
    </>
  );
}

export default App;

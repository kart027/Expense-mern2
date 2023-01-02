
import { Navigate,redirect ,useNavigate} from "react-router-dom";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CheckAuth({ children }) {
   const auth = useSelector((state)=>state.auth)

   return auth.isAuthenticated ? children :<Navigate to="/login" />
}
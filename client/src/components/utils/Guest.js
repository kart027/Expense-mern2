import { Navigate } from "react-router-dom";
import Cookie from "js-cookie";

export default function Guest({ children }) {
    const token = Cookie.get("token")
  
  return !token ? children : <Navigate to="/" />;
}
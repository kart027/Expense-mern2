import App from "./App"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { createBrowserRouter } from "react-router-dom";
import CheckAuth from "./components/utils/CheckAuth";
import Guest from "./components/utils/Guest";

export default  createBrowserRouter([
    {
     
      element:<App/>,
      children:[
        {
          path:"/",
          element: (
            <CheckAuth>
              <Home />
            </CheckAuth>
          ),
  
      },
      {
        path:"/Login",
        element: (
            <Guest>
              <Login />
            </Guest>
          ),
  
    },
    {
      path:"/register",
      element: (
        <Guest>
          <Register />
        </Guest>
      ),
  
  }
    ]
      


    }
  ])
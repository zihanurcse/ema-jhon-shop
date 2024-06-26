import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useContext(authContext)
    const location = useLocation()

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
  };
  
  export default PrivateRoute;
  
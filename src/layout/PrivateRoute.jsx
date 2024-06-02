import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();


    if(loading){
        return <div className="flex justify-center items-center mt-48 mb-48">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            { children }
        </div>
    );
};

export default PrivateRoute;
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider"

const useAuth = () => {
    const allAuth = useContext(AuthContext);
    return allAuth;

};

export default useAuth;
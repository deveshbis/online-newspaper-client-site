import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { axiosPublicSecure } from "../Hooks/usePublicSecure";



export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);

    //create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //image name update user
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    //sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    //github login
    const gitHubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }

    //logout
    const logoutUser = () => {
        setLoading(true);
        setUser(null);
        signOut(auth);


    }

    //current user
    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user);
    //             setLoading(false);
    //         }
    //         else{
    //             setLoading(false); 
    //         }
    //     });
    //     return () => unSubscribe();
    // }, [reload])

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false); 
            if (user) {
                const userInfo = {email: user.email}
                axiosPublicSecure.post("/jwt", userInfo )
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem("access-token", res.data.token)
                    }
                })
            }
            else{
                setLoading(false); 
                localStorage.removeItem("access-token");
            }
        });
        return () => unSubscribe();
    }, [reload])

    const allValue = {
        user,
        loading,
        createUser,
        signInUser,
        googleLogin,
        gitHubLogin,
        logoutUser,
        updateUserProfile,
        setReload
    }
    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
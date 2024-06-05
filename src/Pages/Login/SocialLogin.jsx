import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import usePublicSecure from "../../Hooks/usePublicSecure";


const SocialLogin = () => {
    const { googleLogin, gitHubLogin } = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

    // const location = useLocation();

    // const from = location?.state || '/';

    const handleGooglelLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL

                }
                axiosPublic.post("/users", userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/')
                    })

            })
    }
    const handleGithubLogin = () => {
        gitHubLogin()
        .then(result => {
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                photo: result.user?.photoURL

            }
            axiosPublic.post("/users", userInfo)
                .then(res => {
                    console.log(res.data);
                    navigate('/')
                })

        })
    }
    return (
        <div className=" flex flex-col items-center space-y-2">
            <button onClick={handleGooglelLogin} className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                Google
            </button>
            <button onClick={handleGithubLogin} className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                Github
            </button>
        </div>
    );
};

export default SocialLogin;







// import { FaGithub, FaGoogle } from "react-icons/fa";
// import useAuth from "../../Hooks/useAuth";
// import { useLocation, useNavigate } from "react-router-dom";
// // import usePublicSecure from "../../Hooks/usePublicSecure";


// const SocialLogin = () => {
//     const { googleLogin, gitHubLogin } = useAuth();

//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location?.state || '/';

//     const handleSocialLogin = socialProvider => {
//         socialProvider()
//             .then(result => {
//                 if (result.user) {
//                     navigate(from);
//                 }
//             })
//     }
//     return (
//         <div className="p-5">
//             <div className="flex items-center pb-3 space-x-1">
//                 <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
//                 <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
//                 <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
//             </div>
        
//             <div className=" flex flex-col items-center space-y-2">
//                 <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline w-full">
//                     <FaGoogle></FaGoogle>
//                     Google
//                 </button>
//                 <button onClick={() => handleSocialLogin(gitHubLogin)} className="btn btn-outline w-full">
//                     <FaGithub></FaGithub>
//                     Github
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default SocialLogin;
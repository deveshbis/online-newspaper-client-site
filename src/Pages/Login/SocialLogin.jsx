import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { axiosPublicSecure } from "../../Hooks/usePublicSecure";


const SocialLogin = () => {
    const { googleLogin, gitHubLogin } = useAuth();

    const navigate = useNavigate();
    // const location = useLocation();

    // const from = location?.state || '/';

    // const handleSocialLogin = socialProvider => {
    //     socialProvider()
    //         .then(result => {
    //             if (result.user) {
    //                 navigate(from);
    //             }
    //         })
    // }

    const handleGooglelLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublicSecure.post("/users", userInfo)
                    .then(res => {
                        console.log(res);
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
                    name: result.user?.displayName
                }
                axiosPublicSecure.post("/users", userInfo)
                    .then(res => {
                        console.log(res);
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
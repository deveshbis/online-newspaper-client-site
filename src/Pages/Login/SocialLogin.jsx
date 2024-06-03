import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import usePublicSecure from "../../Hooks/usePublicSecure";


const SocialLogin = () => {
    const { googleLogin, gitHubLogin } = useAuth();
    const axiosPublic = usePublicSecure();
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
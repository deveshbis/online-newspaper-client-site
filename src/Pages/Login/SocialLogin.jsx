import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleLogin, gitHubLogin } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state || '/';

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    navigate(from);
                }
            })
    }
    return (
        <div className=" flex flex-col items-center space-y-2">
            <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                Google
            </button>
            <button onClick={() => handleSocialLogin(gitHubLogin)} className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                Github
            </button>
        </div>
    );
};

export default SocialLogin;
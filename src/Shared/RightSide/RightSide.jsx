import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import AllPublisher from "../../Pages/AllPublisher/AllPublisher";
import SocialLogin from "../../Pages/Login/SocialLogin";
// import AllPublisher from "../../Pages/AllPublisher";

const RightSide = () => {
    return (
        <div>
            <div className='p-5 space-y-3 mb-5'>
                <h2 className="text-3xl">Login Us</h2>
                {/* <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button> */}
                <SocialLogin></SocialLogin>
            </div>
            <div className='p-5  mb-5'>
                <h2 className="text-3xl">Find Us</h2>
                <a className='flex items-center text-xl p-4 gap-3 border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    Facebook
                </a>
                <a className='flex items-center text-xl p-4 gap-3 border' href="">
                    <FaInstagram className='mr-3'></FaInstagram>
                    Instagram
                </a>
                <a className='flex items-center text-xl p-4 gap-3 border rounded-b-lg' href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    Twitter
                </a>
            </div>
            <div className='p-5 space-y-3 mb-5'>
                <h2 className="text-3xl">Publisher-Zone</h2>
                {/* <AllPublisher/> */}
                <AllPublisher></AllPublisher>
                
            </div>
        </div>
    );
};

export default RightSide;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllPublisher from "../AllPublisher/AllPublisher";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Tranding from "../../component/Tranding";
// import useAuth from "../../Hooks/useAuth";


const ArticlesViewDetails = () => {
    const { id } = useParams()
    const [details, setDetails] = useState({});
    // const {user} = useAuth()

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/singleDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
            })
    }, [id]);
    console.log(details);
    return (
        <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 border">
                <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md">
                    <div className="flex space-x-4">
                        <img alt="" src={details.image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{details.publisher}</a>
                            <span className="text-xs dark:text-gray-600">{details.date}</span>
                        </div>
                    </div>
                    <div>
                        <img src={details.image} alt="" className="w-full h-full object-cover sm:h-96" />
                        <h2 className="mb-1 text-xl font-semibold">{details.headline}</h2>
                        <p className="text-sm dark:text-gray-600">{details.content}</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3">
                   <Tranding></Tranding>
                </div>
            </div>
            <div className="border">
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
                <AllPublisher></AllPublisher>
            </div>
        </div>
    );
};

export default ArticlesViewDetails;


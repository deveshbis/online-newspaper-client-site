
import useAuth from "../../Hooks/useAuth";
import { Link, Navigate } from "react-router-dom";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Subscribtion = () => {
    const { user } = useAuth();
    // const { id } = useParams()
    const axiosPublic = useAxiosPublic();
    const { data: planFeatures = [] } = useQuery({
        queryKey: ['planFeatures'],
        queryFn: async () => {
            const res = await axiosPublic.get('/planFeatures');
            return res.data
        }

    })

    console.log(planFeatures);

    if (!user) {

        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    return (
        <div className="mt-5">

            <div className="font-[sans-serif]">
                <div className="max-w-5xl max-lg:max-w-3xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-gray-800 text-3xl font-bold mb-3">Choose a Subscription</h2>
                        <p className="text-sm text-gray-500">Change your plant according your needs</p>
                    </div>

                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-6 max-sm:max-w-sm max-sm:mx-auto">

                        {
                            planFeatures.map(plans => <div key={plans._id} className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105">
                                <div className="h-32 bg-gray-700 text-center p-4">
                                    <h3 className="text-2xl text-white mb-1">{plans.status}</h3>
                                    {/* <p className="text-xs text-white">{plans.name}</p> */}
                                </div>

                                <div className="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-gray-700 text-white border-[3px] flex flex-col items-center justify-center border-white">
                                    <h3 className="text-2xl">${plans.amount}</h3>
                                </div>

                                <div className="px-6 py-4 mt-4">
                                    <ul className="space-y-4">
                                        <li className="flex items-center text-sm text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                                                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                            </svg>
                                            50 Page Unlock
                                        </li>
                                        <li className="flex items-center text-sm text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                                                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                            </svg>
                                            10 GB Storage
                                        </li>
                                        <li className="flex items-center text-sm text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                                                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                            </svg>
                                            6 Team Members
                                        </li>
                                        <li className="flex items-center text-sm text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                                                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                            </svg>
                                            Unlimited Book Mark
                                        </li>
                                        <li className="flex items-center text-sm text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                                                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                            </svg>
                                            Unlimited basic feature
                                        </li>
                                        <li className="flex items-center text-sm text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                                                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                            </svg>
                                            Unlimited updates
                                        </li>
                                    </ul>

                                    <Link to={`/payment/${plans._id}`}>
                                        <button type="button" className="w-full mt-8 px-5 py-2.5 text-sm text-white bg-gray-700 hover:bg-gray-800 rounded-full">Get Started</button>
                                    </Link>
                                </div>
                            </div>
                            )
                        }

                    </div>


                </div>
            </div>
        </div>

    );
};

export default Subscribtion;








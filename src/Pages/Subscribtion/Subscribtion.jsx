
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


            <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-12 mt-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                            Choose Your Plan
                        </h2>
                        <p className="mt-4 text-xl text-purple-200">
                            Unlock the power of decentralized finance with our cutting-edge solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            planFeatures.map(plans => <div key={plans._id} className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 m-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                        {plans.status}
                                    </span>
                                </div>
                                <div className="mb-8">
                                    <h3 className="text-2xl font-semibold text-white">{plans.name}</h3>
                                    <p className="mt-4 text-purple-200">I{plans.description}</p>
                                </div>
                                <div className="mb-8">
                                    <span className="text-5xl font-extrabold text-white">${plans.amount}</span>
                                    <span className="text-xl font-medium text-purple-200">/mo</span>
                                </div>
                                <ul className="mb-8 space-y-4 text-purple-200">
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Unlimited user accounts</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Unlimited transactions</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Advanced analytics</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Priority support</span>
                                    </li>
                                </ul>
                                <Link to={`/payment/${plans._id}`} href="#" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                                    Get Started
                                </Link>
                            </div>
                            )}
                    </div>
                </div>
            </section>


        </div>

    );
};

export default Subscribtion;























// import useAuth from "../../Hooks/useAuth";
// import { Navigate, useParams } from "react-router-dom";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import cardImg from "../../assets/card.jpg"


// const Subscribtion = () => {
// const { user } = useAuth();
// const { id } = useParams()
// const axiosSecure = useAxiosSecure()

// const { data: subscribe = [] } = useQuery({
//     queryKey: ['subscribe'],
//     queryFn: async () => {
//         const res = await axiosSecure.get(`planSubscribe/${id}`);
//         return res.data
//     }

// })

// if (!user) {

//     return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
// }

//     return (
// <div classNameName="mt-5 flex justify-evenly">

//     <div>
//         <h2 classNameName="text-3xl font-bold">{subscribe.name}</h2>
//         <h2 classNameName="text-5xl font-extrabold text-blue-500">$$ {subscribe.amount}</h2>
//         <img src={cardImg} alt="" />
//     </div>
//     <div>
//         <div className="w-full max-w-lg mx-auto p-8">
//             <div className="bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-lg font-medium mb-6">Payment Information</h2>
//                 <form>
//                     <div className="grid grid-cols-2 gap-6">
//                         <div className="col-span-2 sm:col-span-1">
//                             <label for="card-number" className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
//                             <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
//                         </div>
//                         <div className="col-span-2 sm:col-span-1">
//                             <label for="expiration-date" className="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
//                             <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
//                         </div>
//                         <div className="col-span-2 sm:col-span-1">
//                             <label for="cvv" className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
//                             <input type="text" name="cvv" id="cvv" placeholder="000" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
//                         </div>
//                         <div className="col-span-2 sm:col-span-1">
//                             <label for="card-holder" className="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
//                             <input type="text" name="card-holder" id="card-holder" placeholder="Full Name" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
//                         </div>
//                     </div>
//                     <div className="mt-8">
//                         <button type="submit" className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
// </div>

//     );
// };

// export default Subscribtion;







{/* <section classNameName="bg-gradient-to-r from-purple-900 to-indigo-900 py-12 mt-4">
                <div classNameName="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div classNameName="text-center mb-12">
                        <h2 classNameName="text-4xl font-extrabold text-white sm:text-5xl">
                            Choose Your Plan
                        </h2>
                        <p classNameName="mt-4 text-xl text-purple-200">
                            Unlock the power of decentralized finance with our cutting-edge solutions.
                        </p>
                    </div>

                    <div classNameName="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            planFeatures.map(plans => <div key={plans._id} classNameName="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 relative overflow-hidden">
                                <div classNameName="absolute top-0 right-0 m-4">
                                    <span classNameName="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                        {plans.status}
                                    </span>
                                </div>
                                <div classNameName="mb-8">
                                    <h3 classNameName="text-2xl font-semibold text-white">{plans.name}</h3>
                                    <p classNameName="mt-4 text-purple-200">I{plans.description}</p>
                                </div>
                                <div classNameName="mb-8">
                                    <span classNameName="text-5xl font-extrabold text-white">${plans.amount}</span>
                                    <span classNameName="text-xl font-medium text-purple-200">/mo</span>
                                </div>
                                <ul classNameName="mb-8 space-y-4 text-purple-200">
                                    <li classNameName="flex items-center">
                                        <svg classNameName="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Unlimited user accounts</span>
                                    </li>
                                    <li classNameName="flex items-center">
                                        <svg classNameName="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Unlimited transactions</span>
                                    </li>
                                    <li classNameName="flex items-center">
                                        <svg classNameName="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Advanced analytics</span>
                                    </li>
                                    <li classNameName="flex items-center">
                                        <svg classNameName="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Priority support</span>
                                    </li>
                                </ul>
                                <Link to={`/payment/${plans._id}`} href="#" classNameName="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                                    Get Started
                                </Link>
                            </div>
                            )}
                    </div>
                </div>
            </section> */}






//     <div className="font-[sans-serif]">
//     <div className="max-w-5xl max-lg:max-w-3xl mx-auto">
//         <div className="text-center">
//             <h2 className="text-gray-800 text-3xl font-bold mb-3">Choose a Subscription</h2>
//             <p className="text-sm text-gray-500">Change your plant according your needs</p>
//         </div>

//         <div className="flex mx-auto mt-12 bg-gray-100 rounded-full max-w-[200px]">
//             <button className="text-white w-full text-sm bg-blue-600 py-2.5 px-5 rounded-full">
//                 Regular</button>
//             <button
//                 className="text-gray-500 w-full text-sm py-2.5 px-5 rounded-full">
//                 Premium</button>
//         </div>

//         <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-6 max-sm:max-w-sm max-sm:mx-auto">
//             <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105">
//                 <div className="h-32 bg-gray-700 text-center p-4">
//                     <h3 className="text-2xl text-white mb-1">Starter</h3>
//                     <p className="text-xs text-white">1 Month</p>
//                 </div>

//                 <div className="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-gray-700 text-white border-[3px] flex flex-col items-center justify-center border-white">
//                     <h3 className="text-2xl">$10</h3>
//                 </div>

//                 <div className="px-6 py-4 mt-4">
//                     <ul className="space-y-4">
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             50 Page Unlock
//                         </li>
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             10 GB Storage
//                         </li>
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             6 Team Members
//                         </li>
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             Unlimited Book Mark
//                         </li>
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             Unlimited basic feature
//                         </li>
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             Unlimited updates
//                         </li>
//                     </ul>

//                     <button type="button" className="w-full mt-8 px-5 py-2.5 text-sm text-white bg-gray-700 hover:bg-gray-800 rounded-full">Get Started</button>
//                 </div>
//             </div>

//             <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 relative">
//                 <span className="px-2 py-1 text-[10px] font-semibold text-white bg-orange-400 rounded-lg ml-3 absolute -left-4 top-0">Most popular</span>
//                 <div className="h-32 bg-blue-600 text-center p-4">
//                     <h3 className="text-2xl text-white mb-1">Professional</h3>
//                     <p className="text-xs text-white">2 Months</p>
//                 </div>

//                 <div className="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-blue-600 text-white border-[3px] flex flex-col items-center justify-center border-white">
//                     <p className="text-[10px] font-bold">Save 29%</p>
//                     <h3 className="text-2xl">$70</h3>
//                 </div>

//                 <div className="px-6 py-4 mt-4">
//                     <ul className="space-y-4">
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             500 Page Unlock
//                         </li>
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             100 GB Storage
//                         </li>
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             15 Team Members
//                         </li>
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             Unlimited Book Mark
//                         </li>
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             Unlimited basic feature
//                         </li>
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             Unlimited updates
//                         </li>
//                     </ul>

//                     <button type="button" className="w-full mt-8 px-5 py-2.5 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-full">Get Started</button>
//                 </div>
//             </div>

//             <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105">
//                 <div className="h-32 bg-pink-700 text-center p-4">
//                     <h3 className="text-2xl text-white mb-1">Business</h3>
//                     <p className="text-xs text-white">3 Month</p>
//                 </div>

//                 <div className="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-pink-700 text-white border-[3px] flex flex-col items-center justify-center border-white">
//                     <p className="text-[10px] font-bold">Save 33%</p>
//                     <h3 className="text-2xl">$99</h3>
//                 </div>

//                 <div className="px-6 py-4 mt-4">
//                     <ul className="space-y-4">
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             800 Page Unlock
//                         </li>
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             300 GB Storage
//                         </li>
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             50 Team Members
//                         </li>
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             Unlimited Book Mark
//                         </li>
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             Unlimited basic feature
//                         </li>
//                         <li className="flex items-center text-sm text-gray-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                 <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                             </svg>
//                             Unlimited updates
//                         </li>
//                     </ul>

//                     <Link to={`/payment/${id}`}> <button type="button" className="w-full mt-8 px-5 py-2.5 text-sm text-white bg-pink-700 hover:bg-pink-800 rounded-full">Get Started</button></Link>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div> <div className="font-[sans-serif]">
//         <div className="max-w-5xl max-lg:max-w-3xl mx-auto">
//             <div className="text-center">
//                 <h2 className="text-gray-800 text-3xl font-bold mb-3">Choose a Subscription</h2>
//                 <p className="text-sm text-gray-500">Change your plant according your needs</p>
//             </div>

//             <div className="flex mx-auto mt-12 bg-gray-100 rounded-full max-w-[200px]">
//                 <button className="text-white w-full text-sm bg-blue-600 py-2.5 px-5 rounded-full">
//                     Regular</button>
//                 <button
//                     className="text-gray-500 w-full text-sm py-2.5 px-5 rounded-full">
//                     Premium</button>
//             </div>

//             <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-6 max-sm:max-w-sm max-sm:mx-auto">
//                 <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105">
//                     <div className="h-32 bg-gray-700 text-center p-4">
//                         <h3 className="text-2xl text-white mb-1">Starter</h3>
//                         <p className="text-xs text-white">1 Month</p>
//                     </div>

//                     <div className="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-gray-700 text-white border-[3px] flex flex-col items-center justify-center border-white">
//                         <h3 className="text-2xl">$10</h3>
//                     </div>

//                     <div className="px-6 py-4 mt-4">
//                         <ul className="space-y-4">
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 50 Page Unlock
//                             </li>
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 10 GB Storage
//                             </li>
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 6 Team Members
//                             </li>
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 Unlimited Book Mark
//                             </li>
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 Unlimited basic feature
//                             </li>
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 Unlimited updates
//                             </li>
//                         </ul>

//                         <button type="button" className="w-full mt-8 px-5 py-2.5 text-sm text-white bg-gray-700 hover:bg-gray-800 rounded-full">Get Started</button>
//                     </div>
//                 </div>

//                 <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 relative">
//                     <span className="px-2 py-1 text-[10px] font-semibold text-white bg-orange-400 rounded-lg ml-3 absolute -left-4 top-0">Most popular</span>
//                     <div className="h-32 bg-blue-600 text-center p-4">
//                         <h3 className="text-2xl text-white mb-1">Professional</h3>
//                         <p className="text-xs text-white">2 Months</p>
//                     </div>

//                     <div className="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-blue-600 text-white border-[3px] flex flex-col items-center justify-center border-white">
//                         <p className="text-[10px] font-bold">Save 29%</p>
//                         <h3 className="text-2xl">$70</h3>
//                     </div>

//                     <div className="px-6 py-4 mt-4">
//                         <ul className="space-y-4">
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 500 Page Unlock
//                             </li>
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 100 GB Storage
//                             </li>
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 15 Team Members
//                             </li>
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 Unlimited Book Mark
//                             </li>
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 Unlimited basic feature
//                             </li>
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 Unlimited updates
//                             </li>
//                         </ul>

//                         <button type="button" className="w-full mt-8 px-5 py-2.5 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-full">Get Started</button>
//                     </div>
//                 </div>

//                 <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105">
//                     <div className="h-32 bg-pink-700 text-center p-4">
//                         <h3 className="text-2xl text-white mb-1">Business</h3>
//                         <p className="text-xs text-white">3 Month</p>
//                     </div>

//                     <div className="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-pink-700 text-white border-[3px] flex flex-col items-center justify-center border-white">
//                         <p className="text-[10px] font-bold">Save 33%</p>
//                         <h3 className="text-2xl">$99</h3>
//                     </div>

//                     <div className="px-6 py-4 mt-4">
//                         <ul className="space-y-4">
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 800 Page Unlock
//                             </li>
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 300 GB Storage
//                             </li>
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 50 Team Members
//                             </li>
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 Unlimited Book Mark
//                             </li>
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 Unlimited basic feature
//                             </li>
//                             <li className="flex items-center text-sm text-gray-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
//                                     <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
//                                 </svg>
//                                 Unlimited updates
//                             </li>
//                         </ul>

//                         <Link to={`/payment/${id}`}> <button type="button" className="w-full mt-8 px-5 py-2.5 text-sm text-white bg-pink-700 hover:bg-pink-800 rounded-full">Get Started</button></Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
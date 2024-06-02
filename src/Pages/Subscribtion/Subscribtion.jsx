
import useAuth from "../../Hooks/useAuth";
import { Navigate} from "react-router-dom";


const Subscribtion = () => {
    // const [selectedPeriod, setSelectedPeriod] = useState('');
    const { user} = useAuth()
    // const location = useLocation();

    // const handleSubscription = () => {
    //     // Update user's premiumTaken with the current time and selected period
    //     const currentTime = new Date().getTime();
    //     const subscriptionEndTime = selectedPeriod === '1min' ? currentTime + 60000 :
    //         selectedPeriod === '5days' ? currentTime + (5 * 24 * 60 * 60 * 1000) :
    //             selectedPeriod === '10days' ? currentTime + (10 * 24 * 60 * 60 * 1000) : 0;

    //     updateUserProfile({ ...user, premiumTaken: subscriptionEndTime });
    //     // Redirect to payment page
    //     // You can use React Router's useHistory hook here to navigate
    // };

    if (!user) {
        // Redirect to login page if user is not logged in
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    // Check if user is already a premium user
    if (user.premiumTaken && user.premiumTaken > new Date().getTime()) {
        // If premium subscription is still active, redirect to home page
        return <Navigate to='/' state={location?.pathname || '/'}></Navigate>
    }

    return (
        <div className="mt-5">
            <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-12">
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
                        {/* Basic Plan */}
                        <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 m-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                                    Basic
                                </span>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-white">Starter Pack</h3>
                                <p className="mt-4 text-purple-200">Perfect for individuals and small teams.</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-5xl font-extrabold text-white">$49</span>
                                <span className="text-xl font-medium text-purple-200">/mo</span>
                            </div>
                            <ul className="mb-8 space-y-4 text-purple-200">
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>10 user accounts</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>100 transactions per month</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Basic reporting</span>
                                </li>
                            </ul>
                            <a href="#" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                                Get Started
                            </a>
                        </div>

                        {/* Pro Plan */}
                        <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 m-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                    Pro
                                </span>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-white">Growth Pack</h3>
                                <p className="mt-4 text-purple-200">Ideal for growing businesses and enterprises.</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-5xl font-extrabold text-white">$199</span>
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
                            <a href="#" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                                Get Started
                            </a>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 m-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                    Enterprise
                                </span>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-white">Scale Pack</h3>
                                <p className="mt-4 text-purple-200">Tailored for large-scale deployments and custom needs.</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-5xl font-extrabold text-white">Custom</span>
                            </div>
                            <ul className="mb-8 space-y-4 text-purple-200">
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Dedicated infrastructure</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Custom integrations</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Dedicated support team</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Premium SLAs</span>
                                </li>
                            </ul>
                            <a href="#" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700">
                                Contact Sales
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default Subscribtion;
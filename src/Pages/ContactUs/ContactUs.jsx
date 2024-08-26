import React from 'react';
import SectionTitle from '../../component/SectionTitle/SectionTitle';

const ContactUs = () => {
    return (
        <div>
            <SectionTitle
                subHeading="Please send Your Opinion and contact me"
                heading={'Contact Us'}
            ></SectionTitle>
            <section className="min-h-screen bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
                <div className="flex flex-col min-h-screen bg-black/60">
                    <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                            <div className="text-white lg:w-1/2 lg:mx-6">
                                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Newspaper Web</h1>

                                <p className="max-w-xl mt-6">
                                    Get in touch with us for any queries, suggestions, or partnerships related to our newspaper. Whether you're a reader, advertiser, or potential collaborator, we're committed to providing prompt assistance and fostering meaningful connections. Reach out to us today to explore opportunities and engage with our vibrant community.
                                </p>

                                <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                    get in touch
                                </button>

                                <div className="mt-6 md:mt-8">
                                    <h3 className="text-gray-300">Follow us</h3>

                                    <div className="flex mt-4 -mx-1.5 ">
                                        <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="#">
                                            <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                                            </svg>
                                        </a>

                                        {/* Add other social media icons similarly */}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 lg:w-1/2 lg:mx-6">
                                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                                    <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">Contact form</h1>

                                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                                        Ask us everything and we would love
                                        to hear from you
                                    </p>

                                    <form className="mt-6">
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                            <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>
                                        <div className="flex-1 mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                    <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div className="w-full mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                    <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                                </div>

                                        {/* Add other form fields similarly */}

                                        <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                            get in touch
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
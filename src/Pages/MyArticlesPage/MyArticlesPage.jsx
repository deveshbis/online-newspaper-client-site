import { FaEdit, FaPlay, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
import { LuView } from "react-icons/lu";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";


const MyArticlesPage = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const [jobs, setJobs] = useState([])


    useEffect(() => {
        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axiosSecure(`/myPublisher/${user?.email}`)
        setJobs(data)
    }
    
    return (
        <div>
            <section className="container px-4 mx-auto">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">MY Articles</h2>

                    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{jobs.length}</span>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>

                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-x-3">
                                                    <span>Serial No</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-x-3">
                                                    <span>article title</span>
                                                </div>
                                            </th>


                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Status</span>
                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <Link to='/article/:id'><button className="flex items-center gap-x-2">
                                                    <span>View Details</span>
                                                </button></Link>
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Edit</span>
                                                </button>
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Delete</span>
                                                </button>
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Make Premium</span>
                                                </button>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {
                                            jobs.map((allArticle, index) => <tr key={allArticle._id}>
                                                <th>{index + 1}</th>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{allArticle.title}</td>

                                                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                                        <h2 className="text-sm font-normal text-emerald-500">{allArticle.status}</h2>
                                                    </div>
                                                </td>


                                                <td className="px-4 py-4 text-sm whitespace-nowrap">

                                                    <button className="text-2xl">
                                                        <LuView />
                                                    </button>
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">

                                                    <button className="text-2xl">
                                                        <FaEdit />
                                                    </button>
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">

                                                    <button className="text-2xl">
                                                        <FaTrash />
                                                    </button>
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">

                                                    <button className="text-2xl">
                                                        <FaPlay />
                                                    </button>
                                                </td>
                                            </tr>)
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="flex items-center justify-between mt-6">
                    <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>

                        <span>
                            previous
                        </span>
                    </a>

                    <div className="items-center hidden lg:flex gap-x-3">
                        <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
                        <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
                        <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
                        <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
                        <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
                        <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
                        <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
                    </div>

                    <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                        <span>
                            Next
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </div> */}
            </section>
        </div>
    );
};

export default MyArticlesPage;















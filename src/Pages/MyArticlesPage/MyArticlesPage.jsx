import { FaEdit, FaPlay, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { LuView } from "react-icons/lu";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import { useEffect, useState } from "react";

import Swal from "sweetalert2";


const MyArticlesPage = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const { data: articles = [], refetch } = useQuery({
        queryKey: ['articles'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myPublisher/${user?.email}`);
            return res.data
        }

    })

    const handleDeleteArticle = article => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/articles/${article._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <section className="container px-4 mx-auto">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">MY Articles</h2>

                    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{articles.length}</span>
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
                                                <button className="flex items-center gap-x-2">
                                                    <span>View Details</span>
                                                </button>
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
                                            articles.map((article, index) => <tr key={article._id}>
                                                <th>{index + 1}</th>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{article.title}</td>

                                                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                                        <h2 className="text-sm font-normal text-emerald-500">{article.status}</h2>
                                                    </div>
                                                </td>


                                                <td className="px-4 py-4 text-sm whitespace-nowrap">

                                                    <Link to={`/myArticles/${article._id}`} ><LuView className="text-2xl" /></Link>

                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">

                                                    <Link to= {`/myArticledUpdate/${article._id}`}><button className="text-2xl">
                                                        <FaEdit />
                                                    </button></Link>

                                                    
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">

                                                    <button
                                                        onClick={() => handleDeleteArticle(article)}
                                                        className=" btn-lg">
                                                        <FaTrashAlt></FaTrashAlt>
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
            </section>
        </div>
    );
};

export default MyArticlesPage;















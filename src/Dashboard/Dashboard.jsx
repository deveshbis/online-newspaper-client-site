/* eslint-disable react/no-unknown-property */
import { BiUser } from "react-icons/bi";
import { MdPublishedWithChanges } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import logoDash from '/newspaper.png';
import AdminHome from "./AminHome/AdminHome";



const Dashboard = () => {

    const [isAdmin] = useAdmin()
    const { user } = useAuth()

    return (
        <div className="flex">
            <nav className="bg-white shadow-xl h-screen top-0 left-0 min-w-[250px] py-6 px-4 font-[sans-serif] overflow-auto">
                <div className="relative flex flex-col h-full">

                    <div className="flex flex-wrap items-center cursor-pointer relative">
                        <Link to='/'><img src={logoDash} className="w-10 h-10" /></Link>

                        <Link to='/'>
                            <div className="ml-4">
                                <p className="text-sm text-[#333] font-semibold">The News</p>
                                <p className="text-xs text-gray-400 mt-0.5">Dashboard</p>
                            </div></Link>

                    </div>

                    <hr className="my-6" />

                    <div>
                        <h4 className="text-sm text-gray-400 mb-4">Admin</h4>
                        {
                            isAdmin ? <>
                                <ul className="space-y-4 px-2 flex-1 menu">
                                    <li>
                                        <NavLink to="/dashboard/users"><BiUser /> All User </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/allArticlesPage"><RiArticleLine /> All Articles</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/addPublisher"><MdPublishedWithChanges /> Add Publisher</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/dashboard/premiumUser" r><BiUser /> Premium User</NavLink>
                                    </li>
                                </ul>
                            </> :
                                <>
                                    <div className="flex-1">
                                        <h4 className="text-sm text-gray-400 mb-4">User</h4>
                                        <ul className="space-y-4 px-2 flex-1 menu">
                                            <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                                            <li><NavLink to="/AllArticles"><FaHome /> All Articles</NavLink></li>
                                            <li><NavLink to="/subscription"><FaHome /> Subscription</NavLink></li>
                                            <li><NavLink to="/dashboard"><FaHome /> Dashboard</NavLink></li>
                                            <li><NavLink to="/premiumArticles"><FaHome /> Premium Articles</NavLink></li>
                                        </ul>
                                    </div>
                                </>
                        }
                    </div>
                    <div className="mt-4">

                        <div className="flex flex-wrap items-center cursor-pointer border-t py-2 mt-6">
                            <img src={user.photoURL} className="w-10 h-10 rounded-md border-2 border-white" />
                            <div className="ml-4">
                                <p className="text-sm text-[#333] font-semibold">{user.displayName} </p>
                                <p className="text-xs text-gray-400 mt-0.5">Admin</p>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
            <div className="flex-1 p-10">
                <AdminHome></AdminHome>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;

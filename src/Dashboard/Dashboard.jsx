import { BiUser } from "react-icons/bi";
import {  MdPublishedWithChanges } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 bg-yellow-600 min-h-screen text-white">
                <h2 className="text-4xl text-center">Dashboard</h2>
                <div className="divider"></div>
                {isAdmin && (
                    <div>
                        <ul className="menu">
                            <li><NavLink to="/dashboard/users"><BiUser /> All User </NavLink></li>
                        </ul>
                        <ul className="menu">
                            <li><NavLink to="/dashboard/articles"><RiArticleLine /> All Articles</NavLink></li>
                        </ul>
                        <ul className="menu">
                            <li><NavLink to="/dashboard/addPublisher"><MdPublishedWithChanges /> Add Publisher</NavLink></li>
                        </ul>

                    </div>
                )}
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;

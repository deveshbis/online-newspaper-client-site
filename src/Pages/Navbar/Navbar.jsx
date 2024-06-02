import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";


const Navbar = () => {

    const { user, logoutUser } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    const navLinks = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/AllArticles'>All Articles</NavLink></li>
            <li><NavLink to='/AddArticle'>Add Articles</NavLink></li>
            <li><NavLink to='/subscription'>Subscription</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            <li><NavLink to='/premiumArticles'>Premium Articles</NavLink></li>
        </>
    );
    return (
        <div className="navbar w-full  text-black  top-0 start-0 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1060] p-2 shadow text-black bg-white rounded-box w-52 ${dropdownOpen ? 'block' : 'hidden'}`}>
                        {navLinks}
                    </ul>
                </div>
                {/* <Link to='/'><img src={navBarLogo} className="h-16" /></Link> */}
                <Link to='/' className="btn btn-ghost lg:text-2xl md:texxl text-xs text-black">Newspaper Web</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-5 font-semibold text-[16px]">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex items-center space-x-4">
                {user ? (
                    <div className="flex items-center space-x-4 relative">
                        <div
                            className="dropdown dropdown-end"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar relative">
                                <img src={user?.photoURL || "https://i.ibb.co/d7Ppj2d/devesh-jpg.jpg"} className="w-10 rounded-full" alt="User Avatar" />
                            </label>
                            {isHovering && (
                                <p className="absolute top-0 left-0 transform -translate-x-full bg-white shadow-lg rounded px-2 py-1">{user.displayName || 'Unknown User'}</p>
                            )}
                        </div>

                        <Link to='/login'><button onClick={logoutUser} className="btn btn-sm btn-ghost border-black hover:bg-white font-semibold text-[16px]">Logout</button></Link>

                    </div>
                ) : (
                    <Link to='/login'><button className="text-white bg-black p-2 border-black rounded-xl font-semibold text-[16px]">Login</button></Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
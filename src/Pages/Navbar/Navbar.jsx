
// import { Link } from 'react-router-dom'
// import useAuth from '../../Hooks/useAuth'


// const Navbar = () => {
//     const { user, logoutUser } = useAuth()
//     return (
//         <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
//             <div className='flex-1'>
//                 <Link to='/' className='flex gap-2 items-center'>
//                     {/* <img className='w-auto h-7' src={logo} alt='' /> */}
//                     <span className='font-bold'>SoloSphere</span>
//                 </Link>
//             </div>
//             <div className='flex-none'>
//                 <ul className='menu menu-horizontal px-1'>
//                     <li>
//                         <Link to='/'>Home</Link>
//                     </li>
//                     <li>
//                         <Link to='/jobs'>All Jobs</Link>
//                     </li>

//                     {!user && (
//                         <li>
//                             <Link to='/login'>Login</Link>
//                         </li>
//                     )}
//                 </ul>

//                 {user && (
//                     <div className='dropdown dropdown-end z-50'>
//                         <div
//                             tabIndex={0}
//                             role='button'
//                             className='btn btn-ghost btn-circle avatar'
//                         >
//                             <div title={user?.displayName} className='w-10 rounded-full'>
//                                 <img
//                                     referrerPolicy='no-referrer'
//                                     alt='User Profile Photo'
//                                     src={user?.photoURL}
//                                 />
//                             </div>
//                         </div>
// <ul
//     tabIndex={0}
//     className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
// >
//     <li>
//         <Link to='/add-job' className='justify-between'>
//             Add Job
//         </Link>
//     </li>
//     <li>
//         <Link to='/my-posted-jobs'>My Posted Jobs</Link>
//     </li>
//     <li>
//         <Link to='/my-bids'>My Bids</Link>
//     </li>
//     <li>
//         <Link to='/bid-requests'>Bid Requests</Link>
//     </li>
//     <li className='mt-2'>
//         <button
//             onClick={logoutUser}
//             className='bg-gray-200 block text-center'
//         >
//             Logout
//         </button>
//     </li>
// </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Navbar















// import { Link, NavLink } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
// import { useState } from "react";
// import useAdmin from "../../Hooks/useAdmin";



// const Navbar = () => {

//     const [isAdmin,] = useAdmin()
//     const { user, logoutUser } = useAuth();
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     // const [isHovering, setIsHovering] = useState(false);

//     // const handleMouseEnter = () => {
//     //     setIsHovering(true);
//     // };

//     // const handleMouseLeave = () => {
//     //     setIsHovering(false);
//     // };
//     const navLinks = (
//         <>
//             <li><NavLink to='/'>Home</NavLink></li>
//             <li><NavLink to='/allArticles'>All Articles</NavLink></li>
//             <li><NavLink to='/AddArticle'>Add Articles</NavLink></li>
//             <li><NavLink to='/subscription'>Subscription</NavLink></li>
//             {isAdmin && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>}
//             <li><NavLink to='/premiumArticles'>Premium Articles</NavLink></li>
//         </>
//     );
//     return (
//         <div className="navbar w-full  text-black  top-0 start-0 shadow-lg">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>

//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
//                         </svg>
//                     </div>
//                     <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1060] p-2 shadow text-black bg-white rounded-box w-52 ${dropdownOpen ? 'block' : 'hidden'}`}>
//                         {navLinks}
//                     </ul>
//                 </div>
//                 {/* <Link to='/'><img src={navBarLogo} className="h-16" /></Link> */}
//                 <Link to='/' className="btn btn-ghost lg:text-2xl md:texxl text-xs text-black">Newspaper Web</Link>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal flex gap-5 font-semibold text-[16px]">
//                     {navLinks}
//                 </ul>
//             </div>
//             <div className="navbar-end flex items-center space-x-4">
//                 {user && (
//                     <div className='dropdown dropdown-end z-50 flex items-center'>
//                         <div
//                             tabIndex={0}
//                             role='button'
//                             className='btn btn-ghost btn-circle avatar'
//                         >
//                             <div title={user?.displayName} className='w-10 rounded-full'>
//                                 <img
//                                     referrerPolicy='no-referrer'
//                                     alt='User Profile Photo'
//                                     src={user?.photoURL}
//                                 />
//                             </div>
//                         </div>
//                         {!isAdmin ? <>
//                             <ul
//                                 tabIndex={0}
//                                 className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
//                             >
//                                 <li>
//                                     <Link to='/add-job' className='justify-between'>
//                                         Add Job
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link to='/my-posted-jobs'>My Posted Jobs</Link>
//                                 </li>
//                                 <li>
//                                     <Link to='/my-bids'>My Bids</Link>
//                                 </li>
//                                 <li>
//                                     <Link to='/bid-requests'>Bid Requests</Link>
//                                 </li>
//                                 <li className='mt-2'>
//                                     <button
//                                         onClick={logoutUser}
//                                         className='bg-gray-200 block text-center'
//                                     >
//                                         Logout
//                                     </button>
//                                 </li>
//                             </ul>
//                         </> :
//                             <>
//                                 <Link to='/login'><button onClick={logoutUser} className="btn btn-sm btn-ghost border-black hover:bg-white font-semibold text-[16px]">Logout</button></Link>

//                             </>
//                         }

//                         {/* <Link to='/login'><button className="text-white bg-black p-2 border-black rounded-xl font-semibold text-[16px]">Login</button></Link> */}


//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Navbar;




















import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import useAdmin from "../../Hooks/useAdmin";



const Navbar = () => {

    const [isAdmin,] = useAdmin()
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
            <li><NavLink to='/allArticles'>All Articles</NavLink></li>
            <li><NavLink to='/AddArticle'>Add Articles</NavLink></li>
            <li><NavLink to='/subscription'>Subscription</NavLink></li>
            {isAdmin && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>}
            <li><NavLink to='/premiumArticles'>Premium Articles</NavLink></li>
            {user && !isAdmin &&<li><NavLink to='/myArticlesPage'>My Articles Page</NavLink></li>}
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
                                <Link to='/profile'><img src={user?.photoURL || "https://i.ibb.co/d7Ppj2d/devesh-jpg.jpg"} className="w-10 rounded-full" alt="User Avatar" /></Link>
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
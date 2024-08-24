import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import Header from "../Shared/Header/Header";
import BreakingNews from "../Shared/Header/BreakingNews";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
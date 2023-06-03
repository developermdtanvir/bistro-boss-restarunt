import { Outlet } from "react-router-dom";
import Footer from "../pages/sheard/Footer/Footer";
import Navbar from "../pages/sheard/Navbar/Navbar";

function Main() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main;
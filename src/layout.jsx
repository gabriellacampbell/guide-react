//this file tells us how every page is going to look
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import {Outlet} from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div id = "content">
            <Toaster position="top-center" />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;
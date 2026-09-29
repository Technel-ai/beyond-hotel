import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";

function PublicLayout() {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />

            <GetInTouch />
        </>
    );
}

export default PublicLayout;
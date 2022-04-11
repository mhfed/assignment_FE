import { Outlet } from "react-router-dom";
import "./WebsiteLayout.css";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Footer from "../../../components/Footer/Footer";

type Props = {};

const WebsiteLayout = (props: Props) => {
    return (
        <div className="super_container">
            <Sidebar />

            <div>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default WebsiteLayout;

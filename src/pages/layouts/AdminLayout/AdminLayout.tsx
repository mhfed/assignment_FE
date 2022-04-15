import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/admin/Sidebar/Sidebar";

type Props = {};

const AdminLayout = (props: Props) => {
    return (
        <div className="super_container">
            <Sidebar />

            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;

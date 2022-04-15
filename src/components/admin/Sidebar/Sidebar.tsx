import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Sidebar.css";

type Props = {};

const Sidebar = (props: Props) => {
    return (
        <div className="sidebar">
            <div className="sidebar_logo">
                <Link to="/">
                    <div>
                        AD<span>min</span>
                    </div>
                </Link>
            </div>

            <nav className="sidebar_nav">
                <ul>
                    <li>
                        <NavLink to="/admin/dashboard">
                            Dashboard
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/category">
                            Category
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/product">
                            Product
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/user">
                            User
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/setting">
                            Setting
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;

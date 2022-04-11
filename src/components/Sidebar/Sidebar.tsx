import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { getLocalStorage, removeLocalStorage } from "../../utils/localStorage";
import "./sidebar.css";

type Props = {};

const Sidebar = (props: Props) => {
    const userInfo = getLocalStorage();
    const [isLogin, setIsLogin] = useState(!!userInfo);
    const handleLogout = () => {
        removeLocalStorage();
        setIsLogin(!isLogin);
    };
    return (
        <div className="sidebar">
            {!userInfo ? (
                <div className="auth">
                    <Link to="/signup">
                        <button>SignUp</button>
                    </Link>
                    <Link to="/signin">
                        <button>SignIn</button>
                    </Link>
                </div>
            ) : (
                <div className="auth">
                    <span>{userInfo.user.name}</span>
                    <button onClick={handleLogout}>LogOut</button>
                </div>
            )}
            <div className="sidebar_logo">
                <Link to="/">
                    <div>
                        a<span>Store</span>
                    </div>
                </Link>
            </div>

            <nav className="sidebar_nav">
                <ul>
                    <li>
                        <NavLink to="/">
                            home
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            product
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">
                            blog
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            contact
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="search">
                <form
                    action="#"
                    className="search_form"
                    id="sidebar_search_form"
                >
                    <input
                        type="text"
                        className="search_input"
                        placeholder="Search"
                    />
                    <button className="search_button">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </form>
            </div>

            <div className="cart d-flex flex-row align-items-center justify-content-start">
                <div className="cart_icon">
                    <Link to="/cart">
                        <img src="images/bag.png" alt="" />
                        <div className="cart_num">2</div>
                    </Link>
                </div>
                <div className="cart_text">Cart</div>
                <div className="cart_price">$39.99 (1)</div>
            </div>
        </div>
    );
};

export default Sidebar;

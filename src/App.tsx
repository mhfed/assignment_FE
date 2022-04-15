import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import CategoryAdd from "./components/admin/CategoryAdd/CategoryAdd";
import CategoryEdit from "./components/admin/CategoryEdit/CategoryEdit";
import CategoryList from "./components/admin/CategoryList/CategoryList";
import Dashboard from "./components/admin/Dashboard/Dashboard";
import ProductAdd from "./components/admin/ProductAdd/ProductAdd";
import ProductEdit from "./components/admin/ProductEdit/ProductEdit";
import ProductList from "./components/admin/ProductList/ProductList";
import PrivateRouter from "./components/PrivateRouter";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Home from "./pages/Home/Home";
import AdminLayout from "./pages/layouts/AdminLayout/AdminLayout";
import WebsiteLayout from "./pages/layouts/WebsiteLayout/WebsiteLayout";
import ProductPage from "./pages/ProductPage/ProductPage";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart/Cart";

function App() {
    return (
        <div className="App">
            <ToastContainer />

            <Routes>
                <Route path="/" element={<WebsiteLayout />}>
                    <Route index element={<Home />} />
                    <Route path="product">
                        <Route index element={<ProductPage />} />
                        <Route path=":id" element={<ProductDetail />} />
                    </Route>
                    <Route path="about" element={<h1>About</h1>} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/category/:slug" element={<ProductPage />} />
                </Route>
                <Route
                    path="admin"
                    element={
                        <PrivateRouter>
                            <AdminLayout />
                        </PrivateRouter>
                    }
                >
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="product">
                        <Route
                            index
                            element={
                                <PrivateRouter>
                                    <ProductList />
                                </PrivateRouter>
                            }
                        />
                        <Route path="edit/:id" element={<ProductEdit />} />
                        <Route path="add" element={<ProductAdd />} />
                    </Route>
                    <Route path="category">
                        <Route
                            index
                            element={
                                <PrivateRouter>
                                    <CategoryList />
                                </PrivateRouter>
                            }
                        />
                        <Route path="edit/:slug" element={<CategoryEdit />} />
                        <Route path="add" element={<CategoryAdd />} />
                    </Route>
                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
        </div>
    );
}

export default App;

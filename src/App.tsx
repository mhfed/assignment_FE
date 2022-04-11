import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import WebsiteLayout from "./pages/layouts/WebsiteLayout/WebsiteLayout";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";

function App() {
    return (
        <Routes>
            <Route path="/" element={<WebsiteLayout />}>
                <Route index element={<Home />} />
                <Route path="product">
                    <Route index element={<h1>Hien thi san pham</h1>} />
                    <Route path=":id" element={<h1>Chi tiet san pham</h1>} />
                </Route>
                <Route path="about" element={<h1>About</h1>} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
        </Routes>
    );
}

export default App;

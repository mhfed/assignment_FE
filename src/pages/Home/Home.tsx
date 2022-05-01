import React from "react";
import Banner from "../../components/Banner/Banner";
import Boxes from "../../components/Boxes/Boxes";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
import "./home.css";
type Props = {};

const Home = (props: Props) => {
    return (
        <>
            <Banner />
            <Boxes />

            <Category />

            <Product />
        </>
    );
};

export default Home;

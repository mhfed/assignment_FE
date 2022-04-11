import React from "react";
import Banner from "../../components/Banner/Banner";
import "./home.css";
type Props = {};

const Home = (props: Props) => {
    return (
        <>
            {/* <Banner /> */}

            <div className="boxes">
                <div className="section_container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 box_col">
                                <div className="box">
                                    <div className="box_image">
                                        <img src="images/box_1.jpg" alt="" />
                                    </div>
                                    <div className="box_title trans_200">
                                        <a href="categories.html">
                                            summer collection
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 box_col">
                                <div className="box">
                                    <div className="box_image">
                                        <img src="images/box_2.jpg" alt="" />
                                    </div>
                                    <div className="box_title trans_200">
                                        <a href="categories.html">
                                            eyewear collection
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 box_col">
                                <div className="box">
                                    <div className="box_image">
                                        <img src="images/box_3.jpg" alt="" />
                                    </div>
                                    <div className="box_title trans_200">
                                        <a href="categories.html">
                                            basic pieces
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="categories">
                <div className="section_container">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="categories_list_container">
                                    <ul className="categories_list d-flex flex-row align-items-center justify-content-start">
                                        <li>
                                            <a href="categories.html">
                                                new arrivals
                                            </a>
                                        </li>
                                        <li>
                                            <a href="categories.html">
                                                recommended
                                            </a>
                                        </li>
                                        <li>
                                            <a href="categories.html">
                                                best sellers
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="products">
                <div className="section_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="products_container">
                                    <div className="product grid-item hot">
                                        <div className="product_inner">
                                            <div className="product_image">
                                                <img
                                                    src="images/product_1.jpg"
                                                    alt=""
                                                />
                                                <div className="product_tag">
                                                    hot
                                                </div>
                                            </div>
                                            <div className="product_content text-center">
                                                <div className="product_title">
                                                    <a href="product.html">
                                                        long red shirt
                                                    </a>
                                                </div>
                                                <div className="product_price">
                                                    $39.90
                                                </div>
                                                <div className="product_button ml-auto mr-auto trans_200">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product grid-item">
                                        <div className="product_inner">
                                            <div className="product_image">
                                                <img
                                                    src="images/product_2.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="product_content text-center">
                                                <div className="product_title">
                                                    <a href="product.html">
                                                        hype grey shirt
                                                    </a>
                                                </div>
                                                <div className="product_price">
                                                    $19.50
                                                </div>
                                                <div className="product_button ml-auto mr-auto trans_200">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product grid-item sale">
                                        <div className="product_inner">
                                            <div className="product_image">
                                                <img
                                                    src="images/product_3.jpg"
                                                    alt=""
                                                />
                                                <div className="product_tag">
                                                    sale
                                                </div>
                                            </div>
                                            <div className="product_content text-center">
                                                <div className="product_title">
                                                    <a href="product.html">
                                                        long sleeve jacket
                                                    </a>
                                                </div>
                                                <div className="product_price">
                                                    $32.20<span>RRP 64.40</span>
                                                </div>
                                                <div className="product_button ml-auto mr-auto trans_200">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product grid-item">
                                        <div className="product_inner">
                                            <div className="product_image">
                                                <img
                                                    src="images/product_4.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="product_content text-center">
                                                <div className="product_title">
                                                    <a href="product.html">
                                                        denim men shirt
                                                    </a>
                                                </div>
                                                <div className="product_price">
                                                    $59.90
                                                </div>
                                                <div className="product_button ml-auto mr-auto trans_200">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product grid-item">
                                        <div className="product_inner">
                                            <div className="product_image">
                                                <img
                                                    src="images/product_5.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="product_content text-center">
                                                <div className="product_title">
                                                    <a href="product.html">
                                                        long red shirt
                                                    </a>
                                                </div>
                                                <div className="product_price">
                                                    $79.90
                                                </div>
                                                <div className="product_button ml-auto mr-auto trans_200">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product grid-item new">
                                        <div className="product_inner">
                                            <div className="product_image">
                                                <img
                                                    src="images/product_6.jpg"
                                                    alt=""
                                                />
                                                <div className="product_tag">
                                                    new
                                                </div>
                                            </div>
                                            <div className="product_content text-center">
                                                <div className="product_title">
                                                    <a href="product.html">
                                                        hype grey shirt
                                                    </a>
                                                </div>
                                                <div className="product_price">
                                                    $59.90
                                                </div>
                                                <div className="product_button ml-auto mr-auto trans_200">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product grid-item">
                                        <div className="product_inner">
                                            <div className="product_image">
                                                <img
                                                    src="images/product_7.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="product_content text-center">
                                                <div className="product_title">
                                                    <a href="product.html">
                                                        long sleeve jacket
                                                    </a>
                                                </div>
                                                <div className="product_price">
                                                    $15.90
                                                </div>
                                                <div className="product_button ml-auto mr-auto trans_200">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product grid-item sale">
                                        <div className="product_inner">
                                            <div className="product_image">
                                                <img
                                                    src="images/product_8.jpg"
                                                    alt=""
                                                />
                                                <div className="product_tag">
                                                    sale
                                                </div>
                                            </div>
                                            <div className="product_content text-center">
                                                <div className="product_title">
                                                    <a href="product.html">
                                                        denim men shirt
                                                    </a>
                                                </div>
                                                <div className="product_price">
                                                    $43.99<span>RRP 64.40</span>
                                                </div>
                                                <div className="product_button ml-auto mr-auto trans_200">
                                                    <a href="#">add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

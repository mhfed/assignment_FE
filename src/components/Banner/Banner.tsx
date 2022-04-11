import React from "react";
import "./Banner.css";
type Props = {};

const Banner = (props: Props) => {
    return (
        <div className="home">
            <div className="home_slider_container">
                <div className="owl-carousel owl-theme home_slider">
                    <div className="owl-item">
                        <div className="background_image"></div>
                        <div className="home_content_container">
                            <div className="home_content">
                                <div className="home_discount d-flex flex-row align-items-end justify-content-start">
                                    <div className="home_discount_num">20</div>
                                    <div className="home_discount_text">
                                        Discount on the
                                    </div>
                                </div>
                                <div className="home_title">New Collection</div>
                                <div className="button button_1 home_button trans_200">
                                    <a href="categories.html">Shop NOW!</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="owl-item">
                        <div className="background_image"></div>
                        <div className="home_content_container">
                            <div className="home_content">
                                <div className="home_discount d-flex flex-row align-items-end justify-content-start">
                                    <div className="home_discount_num">20</div>
                                    <div className="home_discount_text">
                                        Discount on the
                                    </div>
                                </div>
                                <div className="home_title">New Collection</div>
                                <div className="button button_1 home_button trans_200">
                                    <a href="categories.html">Shop NOW!</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="owl-item">
                        <div className="background_image"></div>
                        <div className="home_content_container">
                            <div className="home_content">
                                <div className="home_discount d-flex flex-row align-items-end justify-content-start">
                                    <div className="home_discount_num">20</div>
                                    <div className="home_discount_text">
                                        Discount on the
                                    </div>
                                </div>
                                <div className="home_title">New Collection</div>
                                <div className="button button_1 home_button trans_200">
                                    <a href="categories.html">Shop NOW!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_slider_nav home_slider_prev trans_200">
                    <div className=" d-flex flex-column align-items-center justify-content-center">
                        <img src="images/prev.png" alt="" />
                    </div>
                </div>
                <div className="home_slider_nav home_slider_next trans_200">
                    <div className=" d-flex flex-column align-items-center justify-content-center">
                        <img src="images/next.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

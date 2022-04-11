import "./Footer.css";

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="footer">
            <div className="footer_content">
                <div className="section_container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-3 col-md-6 footer_col">
                                <div className="footer_about">
                                    <div className="footer_logo">
                                        <a href="#">
                                            <div>
                                                a<span>Store</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="footer_about_text">
                                        <p>
                                            Donec vitae purus nunc. Morbi
                                            faucibus erat sit amet congue
                                            mattis. Nullam fringilla faucibus
                                            urna, id dapibus erat iaculis ut.
                                            Integer ac sem.
                                        </p>
                                    </div>
                                    <div className="cards">
                                        <ul className="d-flex flex-row align-items-center justify-content-start">
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="images/card_1.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="images/card_2.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="images/card_3.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="images/card_4.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="images/card_5.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-3 col-md-6 footer_col">
                                <div className="footer_questions">
                                    <div className="footer_title">
                                        questions
                                    </div>
                                    <div className="footer_list">
                                        <ul>
                                            <li>
                                                <a href="#">About us</a>
                                            </li>
                                            <li>
                                                <a href="#">Track Orders</a>
                                            </li>
                                            <li>
                                                <a href="#">Returns</a>
                                            </li>
                                            <li>
                                                <a href="#">Jobs</a>
                                            </li>
                                            <li>
                                                <a href="#">Shipping</a>
                                            </li>
                                            <li>
                                                <a href="#">Blog</a>
                                            </li>
                                            <li>
                                                <a href="#">Partners</a>
                                            </li>
                                            <li>
                                                <a href="#">Bloggers</a>
                                            </li>
                                            <li>
                                                <a href="#">Support</a>
                                            </li>
                                            <li>
                                                <a href="#">Terms of Use</a>
                                            </li>
                                            <li>
                                                <a href="#">Press</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_social">
                <div className="section_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="footer_social_container d-flex flex-row align-items-center justify-content-between">
                                    <a href="#">
                                        <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                            <div className="footer_social_icon">
                                                <i
                                                    className="fa fa-instagram"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                            <div className="footer_social_title">
                                                instagram
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#">
                                        <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                            <div className="footer_social_icon">
                                                <i
                                                    className="fa fa-google-plus"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                            <div className="footer_social_title">
                                                google +
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#">
                                        <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                            <div className="footer_social_icon">
                                                <i
                                                    className="fa fa-pinterest"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                            <div className="footer_social_title">
                                                pinterest
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#">
                                        <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                            <div className="footer_social_icon">
                                                <i
                                                    className="fa fa-facebook"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                            <div className="footer_social_title">
                                                facebook
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#">
                                        <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                            <div className="footer_social_icon">
                                                <i
                                                    className="fa fa-twitter"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                            <div className="footer_social_title">
                                                twitter
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#">
                                        <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                            <div className="footer_social_icon">
                                                <i
                                                    className="fa fa-youtube"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                            <div className="footer_social_title">
                                                youtube
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#">
                                        <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                            <div className="footer_social_icon">
                                                <i
                                                    className="fa fa-tumblr-square"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                            <div className="footer_social_title">
                                                tumblr
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

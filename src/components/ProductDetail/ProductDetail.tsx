import React, { useEffect } from "react";
import "./ProductDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../features/productSlice";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";

type Props = {};

const ProductDetail = (props: Props) => {
    const { id } = useParams();
    const product = useSelector((state: any) => state.product.aProduct);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct(id));
    }, []);
    const handleAddToCart = (product: any) => {
        dispatch(addToCart(product));
    };
    return (
        <div className="section_container">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="product_content_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
                            <div className="product_content order-lg-1 order-2">
                                <div className="product_content_inner">
                                    <img src={product.img} alt={product.name} />
                                </div>
                            </div>
                            <div className="product_sidebar order-lg-2 order-1">
                                <form
                                    action="#"
                                    id="product_form"
                                    className="product_form"
                                >
                                    <div className="product_name">
                                        {product.name}
                                    </div>
                                    <div className="product_price">
                                        {product.price}
                                    </div>
                                    <div className="product_desc">
                                        {product.desc}
                                    </div>

                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="cart_button"
                                    >
                                        add to cart
                                    </button>
                                    <div className="similar_products_button">
                                        <Link to="categories.html">
                                            see similar products
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

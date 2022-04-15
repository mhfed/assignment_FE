import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";
import { getCategory } from "../../features/categorySlice";
import { getProducts } from "../../features/productSlice";
import "./Product.css";

type Props = {};

const Product = (props: Props) => {
    const dispatch = useDispatch();
    const { slug } = useParams();
    console.log(slug);

    let products = useSelector((state: any) => state.product.value);
    // const [products, setProducts] = useState(pros);
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    // if (slug) {
    //     const pros = useSelector((state: any) => state.category.aCategory);
    //     useEffect(() => {
    //         dispatch(getCategory(slug));
    //     }, [slug]);
    //     setProducts(pros);
    // }

    // handleAddToCart
    const handleAddToCart = (product: any) => {
        dispatch(addToCart(product));
    };
    return (
        <div className="products">
            <div className="section_container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="products_container">
                                {products.map((product: any) => {
                                    return (
                                        <div
                                            className="product grid-item"
                                            key={product._id}
                                        >
                                            <div className="product_inner">
                                                <div className="product_image">
                                                    <img
                                                        src={product.img}
                                                        alt=""
                                                    />
                                                    <div className="product_tag">
                                                        hot
                                                    </div>
                                                </div>
                                                <div className="product_content text-center">
                                                    <div className="product_title">
                                                        <Link
                                                            to={`/product/${product._id}`}
                                                        >
                                                            {product.name}
                                                        </Link>
                                                    </div>
                                                    <div className="product_price">
                                                        ${product.price}
                                                    </div>
                                                    <button
                                                        onClick={() =>
                                                            handleAddToCart(
                                                                product
                                                            )
                                                        }
                                                        className="product_button ml-auto mr-auto trans_200"
                                                    >
                                                        add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

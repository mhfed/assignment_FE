import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeItemInCart,
} from "../../features/cartSlice";
import "./Cart.css";
type Props = {};

const Cart = (props: Props) => {
    const cart = useSelector((state: any) => state.cart);
    const dispatch = useDispatch();
    const handleRemoveItemInCart = (product: any) => {
        dispatch(removeItemInCart(product));
    };

    const handleDecreaseCart = (product: any) => {
        dispatch(decreaseCart(product));
    };
    const handleIncreaseCart = (product: any) => {
        dispatch(addToCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);
    return (
        <div className="cart_section">
            <div className="section_container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {cart.cartItems.length === 0 ? (
                                <div className="cart_container">
                                    <img
                                        src="https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png"
                                        alt=""
                                    />
                                </div>
                            ) : (
                                <div className="cart_container">
                                    <div className="cart_bar">
                                        <ul className="cart_bar_list item_list d-flex flex-row align-items-center justify-content-start">
                                            <li>Product</li>
                                            <li>Price</li>
                                            <li>Quantity</li>
                                            <li>Total</li>
                                            <li></li>
                                        </ul>
                                    </div>

                                    <div className="cart_items">
                                        <ul className="cart_items_list">
                                            {cart.cartItems?.map(
                                                (item: any) => (
                                                    <li
                                                        key={item._id}
                                                        className="cart_item item_list d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start"
                                                    >
                                                        <div className="product d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                                                            <div>
                                                                <div className="product_image_cart">
                                                                    <img
                                                                        src={
                                                                            item.img
                                                                        }
                                                                        alt={
                                                                            item.name
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="product_name">
                                                                <Link
                                                                    to={`/product${item._id}`}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="product_price text-lg-center product_text">
                                                            <span>Price: </span>
                                                            {item.price}
                                                        </div>
                                                        <div className="product_quantity_container">
                                                            <div className="product_quantity ml-lg-auto mr-lg-auto text-center">
                                                                <span className="product_text product_num">
                                                                    {
                                                                        item.quantity
                                                                    }
                                                                </span>
                                                                <div
                                                                    onClick={() =>
                                                                        handleDecreaseCart(
                                                                            item
                                                                        )
                                                                    }
                                                                    className="qty_sub qty_button trans_200 text-center"
                                                                >
                                                                    <span>
                                                                        -
                                                                    </span>
                                                                </div>
                                                                <div
                                                                    onClick={() =>
                                                                        handleIncreaseCart(
                                                                            item
                                                                        )
                                                                    }
                                                                    className="qty_add qty_button trans_200 text-center"
                                                                >
                                                                    <span>
                                                                        +
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product_total text-lg-center product_text">
                                                            <span>Total: </span>
                                                            $
                                                            {item.price *
                                                                item.quantity}
                                                        </div>
                                                        <div className="text-lg-center product_text">
                                                            <button
                                                                onClick={() =>
                                                                    handleRemoveItemInCart(
                                                                        item
                                                                    )
                                                                }
                                                                className="btn btn-danger"
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    <div className="cart_buttons d-flex flex-row align-items-start justify-content-start">
                                        <div className="cart_buttons_inner ml-auto d-flex flex-row align-items-start justify-content-start flex-wrap">
                                            <div className="button button_continue trans_200">
                                                <a href="categories.html">
                                                    continue shopping
                                                </a>
                                            </div>
                                            <div
                                                onClick={handleClearCart}
                                                className="button button_clear trans_200"
                                            >
                                                clear cart
                                            </div>
                                            <div className="button button_update trans_200">
                                                <a href="categories.html">
                                                    update cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="section_container cart_extra_container">
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                            <div className="cart_extra cart_extra_2">
                                <div className="cart_extra_content cart_extra_total">
                                    <div className="cart_extra_title">
                                        Cart Total
                                    </div>
                                    <ul className="cart_extra_total_list">
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div className="cart_extra_total_title">
                                                Subtotal
                                            </div>
                                            <div className="cart_extra_total_value ml-auto">
                                                $ {cart.cartTotalAmount}
                                            </div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div className="cart_extra_total_title">
                                                Shipping
                                            </div>
                                            <div className="cart_extra_total_value ml-auto">
                                                Free
                                            </div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div className="cart_extra_total_title">
                                                Total
                                            </div>
                                            <div className="cart_extra_total_value ml-auto">
                                                $ {cart.cartTotalAmount}
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="checkout_button trans_200">
                                        <a href="checkout.html">
                                            proceed to checkout
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart") as string)
            : [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
    },
    reducers: {
        addToCart(state: any, action: any) {
            const indexItem = state.cartItems.findIndex(
                (item: any) => item._id === action.payload._id
            );
            if (indexItem >= 0) {
                state.cartItems[indexItem].quantity += 1;
                toast.info("Đã tăng số lượng sản phẩm", {
                    position: "top-right",
                });
            } else {
                const temProduct = { ...action.payload, quantity: 1 };
                state.cartItems.push(temProduct);
                toast.success("Đã thêm vào giỏ hàng", {
                    position: "top-right",
                });
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        removeItemInCart(state: any, action: any) {
            const newCartItems = state.cartItems.filter(
                (item: any) => item._id !== action.payload._id
            );
            state.cartItems = newCartItems;
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
            toast.error("Đã xóa khỏi giỏ hàng", {
                position: "top-right",
            });
        },
        decreaseCart(state: any, action: any) {
            const itemIndex = state.cartItems.findIndex(
                (item: any) => item._id === action.payload._id
            );

            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
                toast.info("Đã giảm số lượng sản phẩm", {
                    position: "top-right",
                });
            } else if (state.cartItems[itemIndex].quantity === 1) {
                const newCartItems = state.cartItems.filter(
                    (item: any) => item._id !== action.payload._id
                );
                state.cartItems = newCartItems;
                toast.error("Đã xóa khỏi giỏ hàng", {
                    position: "top-right",
                });
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        clearCart(state: any, action: any) {
            state.cartItems = [];
            toast.error("Đã xóa hết giỏ hàng", {
                position: "top-right",
            });
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        getTotals(state: any, action: any) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal: any, cartItem: any) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += quantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    },
});
export const {
    addToCart,
    removeItemInCart,
    decreaseCart,
    clearCart,
    getTotals,
} = cartSlice.actions;

export default cartSlice.reducer;

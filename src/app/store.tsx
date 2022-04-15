import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import categorySlice from "../features/categorySlice";
import cartSlice, { getTotals } from "../features/cartSlice";
export const store = configureStore({
    reducer: {
        product: productSlice,
        category: categorySlice,
        cart: cartSlice,
    },
});
store.dispatch(getTotals());

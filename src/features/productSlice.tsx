import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../api/category";
import { add, list, read, remove, update } from "../api/product";

export const getProducts = createAsyncThunk(
    "product/getProducts",
    async (params, thunkAPI) => {
        const { data } = await list();
        return data;
    }
);
export const addProduct = createAsyncThunk(
    "product/addProduct",
    async (params: any, thunkAPI) => {
        console.log(params);

        const { data } = await add(params);

        return data;
    }
);
export const removeProduct = createAsyncThunk(
    "product/removeProduct",
    async (params: any, thunkAPI) => {
        const { data } = await remove(params);
        return data;
    }
);
export const getProduct = createAsyncThunk(
    "product/getProduct",
    async (params: any, thunkAPI) => {
        const { data } = await read(params);
        return data;
    }
);
export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async (params: any, thunkAPI) => {
        const { data, id } = params;
        const { data: product } = await update(data, id);

        return product;
    }
);

const productSlice = createSlice({
    name: "product",
    initialState: {
        value: [],
        aProduct: {},
        status: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Get Products
            .addCase(getProducts.pending, (state: any) => {
                state.status = "loading";
            })
            .addCase(getProducts.fulfilled, (state: any, action) => {
                state.value = action.payload;
                state.status = "done";
            })
            // Add Product
            .addCase(addProduct.pending, (state: any) => {
                state.status = "loading";
            })
            .addCase(addProduct.fulfilled, (state: any, action: any) => {
                state.value.push(action.payload);
                state.status = "done";
            })
            // Remove Product
            .addCase(removeProduct.pending, (state: any) => {
                state.status = "loading";
            })
            .addCase(removeProduct.fulfilled, (state: any, action: any) => {
                state.value = state.value.filter(
                    (item: any) => item._id !== action.payload._id
                );
                state.status = "done";
            })
            // Get A Product
            .addCase(getProduct.pending, (state: any) => {
                state.status = "loading";
            })
            .addCase(getProduct.fulfilled, (state: any, action) => {
                state.aProduct = action.payload;
                state.status = "done";
            })
            // Update Product
            .addCase(updateProduct.pending, (state: any) => {
                state.status = "loading";
            })
            .addCase(updateProduct.fulfilled, (state: any, action: any) => {
                state.value.push(action.payload);
                state.status = "done";
            });
    },
});

export const { actions, reducer } = productSlice;

export default reducer;

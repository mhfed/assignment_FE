import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { add, list, get, remove, update } from "../api/category";
import { updateProduct } from "./productSlice";

export const getCategories = createAsyncThunk(
    "category/getCategories",
    async (params, thunkAPI) => {
        const { data } = await list();
        return data;
    }
);
export const removeCategory = createAsyncThunk(
    "category/removeCategory",
    async (params: any, thunkAPI) => {
        const { data } = await remove(params);
        return data;
    }
);
export const addCategory = createAsyncThunk(
    "category/addCategory",
    async (params: any, thunkAPI) => {
        const { data } = await add(params);
        return data;
    }
);
export const getCategory = createAsyncThunk(
    "category/getCategory",
    async (params: any, thunkAPI) => {
        const { data } = await get(params);

        return data;
    }
);
export const updateCategory = createAsyncThunk(
    "category/updateCategory",
    async (params: any, thunkAPI) => {
        const { data, slug } = params;
        const { data: category } = await update(data, slug);
        console.log(category);

        return category;
    }
);
const categorySlice = createSlice({
    name: "category",
    initialState: {
        value: [],
        aCategory: [],
        status: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Get category
            .addCase(getCategories.pending, (state: any) => {
                state.status = "loading";
            })
            .addCase(getCategories.fulfilled, (state: any, action) => {
                state.value = action.payload;
                state.status = "done";
            })
            // Add Category
            .addCase(addCategory.pending, (state: any) => {
                state.status = "loading";
            })
            .addCase(addCategory.fulfilled, (state: any, action: any) => {
                state.value.push(action.payload);
                state.status = "done";
            })

            // Remove Category
            .addCase(removeCategory.pending, (state: any) => {
                state.status = "loading";
            })
            .addCase(removeCategory.fulfilled, (state: any, action: any) => {
                console.log(action);

                state.value = state.value.filter(
                    (item: any) => item.slug !== action.payload.category.slug
                );
                state.status = "done";
            })
            // Get A Category
            .addCase(getCategory.pending, (state: any) => {
                state.status = "loading";
            })
            .addCase(getCategory.fulfilled, (state: any, action) => {
                console.log(action);

                state.aCategory = action.payload.category;
                state.status = "done";
            })
            .addCase(updateCategory.pending, (state: any) => {
                state.status = "loading";
            })
            .addCase(updateCategory.fulfilled, (state: any, action: any) => {
                state.value.push(action.payload);
                state.status = "done";
            });
    },
});

export const { actions, reducer } = categorySlice;

export default reducer;

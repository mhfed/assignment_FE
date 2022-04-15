import React, { useEffect } from "react";
import "./ProductAdd.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../features/productSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { getCategories } from "../../../features/categorySlice";

type TypeInputs = {
    category: string;
    name: string;
    price: number;
    img: string;
    desc: string;
};

const ProductAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categories = useSelector((state: any) => state.category.value);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TypeInputs>();

    const onSubmit: SubmitHandler<TypeInputs> = async (data) => {
        try {
            const actionResult: any = await dispatch(addProduct(data));
            const currentProduct = unwrapResult(actionResult);
            if (currentProduct) {
                navigate("/admin/product");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="container mt-4 wrapper-form-add">
            <h1 className="mb-4">Add Product</h1>
            <form className="formAdd" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="category">Category </label>
                    <select className="form-select" {...register("category")}>
                        {categories.map((cate: any) => {
                            return (
                                <option key={cate._id} value={cate._id}>
                                    {cate.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="price">Product Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        {...register("price")}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="img">IMG</label>
                    <input
                        type="text"
                        className="form-control"
                        id="img"
                        {...register("img")}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>

                    <textarea
                        id="desc"
                        {...register("desc")}
                        className="form-control"
                        rows="5"
                    ></textarea>
                </div>

                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ProductAdd;

import React from "react";
import "./CategoryAdd.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../../features/categorySlice";
import { unwrapResult } from "@reduxjs/toolkit";

type TypeInputs = {
    name: string;
};
const CategoryAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TypeInputs>();

    const onSubmit: SubmitHandler<TypeInputs> = async (data) => {
        try {
            const actionResult: any = await dispatch(addCategory(data));
            const currentCategory = unwrapResult(actionResult);
            if (currentCategory) {
                navigate("/admin/category");
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
                    <label htmlFor="name">Category Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        {...register("name", { required: true, maxLength: 80 })}
                    />
                    {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CategoryAdd;

import React, { useEffect } from "react";
import "./CategoryEdit.css";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, updateCategory } from "../../../features/categorySlice";
import { unwrapResult } from "@reduxjs/toolkit";

type TypeInputs = {
    name: string;
};

const CategoryEdit = () => {
    const { slug } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<TypeInputs>();

    const data = useSelector((state: any) => state.category.aCategory);

    useEffect(() => {
        const getACategory = async () => {
            const actionResult: any = await dispatch(getCategory(slug));
            const cate = unwrapResult(actionResult);

            reset(cate.category);
        };
        getACategory();
    }, []);

    const onSubmit: SubmitHandler<TypeInputs> = async (data) => {
        try {
            const actionResult: any = await dispatch(
                updateCategory({ data, slug })
            );
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

export default CategoryEdit;

import React, { useEffect } from "react";
import "./ProductEdit.css";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, updateProduct } from "../../../features/productSlice";
import { unwrapResult } from "@reduxjs/toolkit";

type TypeInputs = {
    name: string;
    price: number;
    img: string;
    desc: string;
};

const ProductEdit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<TypeInputs>();

    const product = useSelector((state: any) => state.product.aProduct);

    useEffect(() => {
        const getAProduct = async () => {
            const actionResult: any = await dispatch(getProduct(id));
            const product = unwrapResult(actionResult);
            reset(product);
            //State thay doi sao component ko rerender lai ????
        };
        getAProduct();
    }, []);
    const onSubmit: SubmitHandler<TypeInputs> = async (data) => {
        try {
            const actionResult: any = await dispatch(
                updateProduct({ data, id })
            );
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
            <h1 className="mb-4">Update Product</h1>
            <form className="formAdd" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="category">Category </label>
                    <select className="form-select">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        {...register("name", { required: true, maxLength: 80 })}
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
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ProductEdit;

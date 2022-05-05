import React, { useEffect } from "react";
import "./ProductAdd.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../features/productSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { getCategories } from "../../../features/categorySlice";

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase";
import { toast } from "react-toastify";

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
            if (!data.img) return;
            const storageRef = ref(storage, `files/${data.img[0].name}`);
            const uploadTask = uploadBytesResumable(storageRef, data.img[0]);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const prog = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    //XU LI PROGRESSBAR O DAY
                },
                (error) => console.log(error),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            data.img = downloadURL;
                            // Call API here
                            dispatch(addProduct(data)).then(() => {
                                toast.success("Add product successfully");
                                navigate("/admin/product");
                            });
                            console.log("File available at", downloadURL);
                        }
                    );
                }
            );
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
                    <label htmlFor="img">Upload Img</label>
                    <input
                        type="file"
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
                        rows={5}
                    ></textarea>
                </div>

                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ProductAdd;

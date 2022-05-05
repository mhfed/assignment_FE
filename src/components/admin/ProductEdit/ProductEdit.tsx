import React, { useEffect } from "react";
import "./ProductEdit.css";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, updateProduct } from "../../../features/productSlice";
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
    const categories = useSelector((state: any) => state.category.value);

    useEffect(() => {
        const getAProduct = async () => {
            const actionResult: any = await dispatch(getProduct(id));
            const product = unwrapResult(actionResult);
            reset(product);
            //State thay doi sao component ko rerender lai ????
            dispatch(getCategories());
        };
        getAProduct();
    }, []);
    const onSubmit: SubmitHandler<TypeInputs> = async (data: any) => {
        try {
            if (data.img) {
                const storageRef = ref(storage, `files/${data.img[0].name}`);
                const uploadTask = uploadBytesResumable(
                    storageRef,
                    data.img[0]
                );
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const prog = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) *
                                100
                        );
                        //XU LI PROGRESSBAR O DAY
                    },
                    (error) => console.log(error),
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then(
                            (downloadURL) => {
                                data.img = downloadURL;
                                // Call API here
                                dispatch(updateProduct({ data, id })).then(
                                    () => {
                                        toast.success(
                                            "Updated product successfully"
                                        );
                                        navigate("/admin/product");
                                    }
                                );
                                console.log("File available at", downloadURL);
                            }
                        );
                    }
                );
            } else {
                dispatch(updateProduct({ data, id }));
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
                        type="file"
                        className="form-control"
                        id="img"
                        {...register("img")}
                    />
                    <img src={product.img} alt="" width="100" />
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
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ProductEdit;

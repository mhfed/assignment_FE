import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProductList.css";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, removeProduct } from "../../../features/productSlice";
import { unwrapResult } from "@reduxjs/toolkit";
type Props = {};

const ProductList = (props: Props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state: any) => state.product.value);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const handleRemove = async (id: number) => {
        const isRemove = window.confirm("Are you sure you want to remove?");
        if (isRemove) {
            const actionResult: any = await dispatch(removeProduct(id));
            const currentProduct = unwrapResult(actionResult);
            if (currentProduct) {
                navigate("/admin/product");
            }
        }
    };
    return (
        <div className="container mt-4">
            <h1 className="mb-4">List Product</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Img</th>
                        <th scope="col">
                            <Link to="/admin/product/add">
                                <button className="btn btn-primary">Add</button>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product: any, index: any) => {
                        return (
                            <tr key={product._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <img
                                        src={
                                            product.img ||
                                            "https://icons.iconarchive.com/icons/ccard3dev/dynamic-yosemite/1024/Preview-icon.png"
                                        }
                                        alt=""
                                        width={60}
                                    />
                                </td>
                                <td>
                                    <div className="btn-group">
                                        <Link
                                            to={`/admin/product/edit/${product._id}`}
                                        >
                                            <button className="btn btn-warning">
                                                Edit
                                            </button>
                                        </Link>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                handleRemove(product._id)
                                            }
                                        >
                                            Del
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;

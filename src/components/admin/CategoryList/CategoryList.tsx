import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, removeCategory } from "../../../features/categorySlice";
import { unwrapResult } from "@reduxjs/toolkit";

type Props = {};

const CategoryList = (props: Props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categories = useSelector((state: any) => state.category.value);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const handleRemove = async (slug: number) => {
        const actionResult: any = await dispatch(removeCategory(slug));
        const currentCategory = unwrapResult(actionResult);
    };
    return (
        <div className="container mt-4">
            <h1 className="mb-4">List Product</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">
                            <Link to="/admin/category/add">
                                <button className="btn btn-primary">Add</button>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((cate: any, index: any) => {
                        return (
                            <tr key={cate._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{cate.name}</td>
                                <td>
                                    <div className="btn-group">
                                        <Link
                                            to={`/admin/category/edit/${cate.slug}`}
                                        >
                                            <button className="btn btn-warning">
                                                Edit
                                            </button>
                                        </Link>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                handleRemove(cate.slug)
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

export default CategoryList;

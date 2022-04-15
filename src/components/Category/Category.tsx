import React, { useEffect } from "react";
import "./Category.css";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../features/categorySlice";
import { Link } from "react-router-dom";

type Props = {};

const Category = (props: Props) => {
    const categories = useSelector((state: any) => state.category.value);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, []);
    return (
        <div className="categories">
            <div className="section_container">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="categories_list_container">
                                <ul className="categories_list d-flex flex-row align-items-center justify-content-start">
                                    {categories.map((category: any) => {
                                        return (
                                            <li key={category._id}>
                                                <Link
                                                    to={`/category/${category.slug}`}
                                                >
                                                    {category.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;

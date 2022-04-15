import React from "react";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";

type Props = {};

const ProductCategory = (props: Props) => {
    return (
        <>
            <Category />

            <Product />
        </>
    );
};

export default ProductCategory;

import React from 'react';
import {getVisibleProducts} from "../reducers/products";
import ProductItem from "./ProductItem";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../actions";
const ProductList = () => {
    const products = useSelector(state => getVisibleProducts(state.products))
    const dispatch = useDispatch();
    const dispatchAddtoCart = (id) => dispatch(addToCart(id))
    return (
        <div>
            <h3>Products</h3>
            {products.map(product =>
            <ProductItem key={product.id} product={product}
            onAddToCartClicked={() => {dispatchAddtoCart(product.id)}}/>)}
        </div>
    )
}
export default ProductList;
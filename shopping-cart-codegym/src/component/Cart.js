import React from 'react'
import Product from './Product'
import {useDispatch, useSelector} from "react-redux"
import { getTotal, getCartProducts } from '../reducers'
import {checkout} from "../actions";


const Cart = () => {
    const products = useSelector(getCartProducts)
    console.log('products', products)
    const total = useSelector(getTotal)
    console.log('total', total)
    const dispatch = useDispatch()

    const handleCheckout = () => {
        dispatch(checkout(products))
    }

    const hasProducts = products.length > 0;
    const nodes = hasProducts ? (
        products.map(product =>
        <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
        />)
    ): (
        <em>Please add some products to cart.</em>
    )

    return (
        <div>
            <h3>Your Cart</h3>
            <div>{nodes}</div>
            <p>Total: ${total}</p>
            <button
                onClick={handleCheckout}
                disabled={hasProducts ? '' : 'disabled'}>
                Checkout
            </button>
        </div>
    )
}
export  default Cart
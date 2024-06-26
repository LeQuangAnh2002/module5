import React from 'react';
import {Slider} from "../../components/hero/Silder";
import {Order} from "../../components/hero/Order";
import {Category} from "../../components/category/Category";
import {Product} from "../../components/product/Product";

export const  Home = () => {

    return(
        <>
            <Slider/>
            <Order/>
            <Category/>
            <Product/>
        </>
    )
}
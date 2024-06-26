import React,{Fragment} from 'react';
import TopNavBar from "../component/header/TopNavBar";
import Footer from "../component/footer/Footer";
import {Routes,Route} from 'react-router-dom';
import HeaderSilder from "../component/slider/HeaderSilder";
import AllCategories from "../component/Categories/AllCategories";

const Home = () => {
    return(
        <Fragment>
            <TopNavBar/>
            <HeaderSilder/>
            <AllCategories/>
            <div className="mb-5 pd-5"></div>
            <div className="mb-5 pd-5"></div>
            <Footer/>
        </Fragment>
    )
}
export default Home;
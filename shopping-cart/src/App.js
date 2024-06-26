import logo from './logo.svg';
import './App.css';
import Home from "./page/Home";
import React, {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import Products from "./page/Products";
import Contact from "./page/Contact";


function App() {
  return (
   <Fragment>
     <Routes>

         <Route path="/" element={<Home />} />
         <Route path="products" element={<Products/>}/>
         <Route path="contact" element={<Contact/>}/>
     </Routes>

   </Fragment>
  );
}

export default App;

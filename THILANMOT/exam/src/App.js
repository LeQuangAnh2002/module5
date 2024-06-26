import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ListProduct from "./components/product/ListProduct";
import CreateProduct from "./components/product/CreateProduct";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";


function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<ListProduct/>}/>
              <Route path="/create" element={<CreateProduct/>}/>

          </Routes>

        </BrowserRouter>
          <ToastContainer/>
      </>
  )
}

export default App;

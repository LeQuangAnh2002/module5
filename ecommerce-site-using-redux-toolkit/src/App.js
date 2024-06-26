import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from "react";
import {Header} from "./components/header/Header";
import {Home} from "./pages/home/Home";
import {Footer} from "./components/footer/Footer";
import {Register} from "./pages/login/Register";
import {Login} from "./pages/login/Login";
import {Account} from "./pages/account/Account";

function App() {
  return (
      <div>
        <Router>
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/account' element={<Account />} />
          </Routes>
            <Footer/>
        </Router>
      </div>
  );
}

export default App;

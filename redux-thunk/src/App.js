import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./component/Login";
import User from "./component/User";
import store from "./redux/store";
import React from "react";

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<User />} />
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;

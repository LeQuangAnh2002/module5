
import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import store from "./redux/store";
import User from "./components/User";
import Login from "./components/Login";
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

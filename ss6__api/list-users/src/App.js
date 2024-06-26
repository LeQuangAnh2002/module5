import React from "react";
import './App.css';
import User from "./component/ListUsers";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import UserDetails from "./component/UserDetails";



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path={"/user/add"} element={<UserDetails />} />
          <Route path={`/user/:userID`} element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
  );

}

export default App;

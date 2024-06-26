import logo from './logo.svg';
import './App.css';

import StudentList from "./components/student/StudentList";
import DemoState from "./components/DemoState";
import {useState} from "react";
import StudentCreate from "./components/student/StudentCreate";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {
    const [className, setClassName] = useState("")
    const changeNameClass = (event) => {
        console.log(1)
        setClassName(event.target.value);
        console.log(className)
    }
    return (
        <>
          <BrowserRouter>
              <Routes>
                  <Route path="/student" element={<StudentList/>}></Route>
                  <Route path="/student/create" element={<StudentCreate/>}></Route>
              </Routes>
          </BrowserRouter>
            <ToastContainer/>
        </>
    );
}

export default App;

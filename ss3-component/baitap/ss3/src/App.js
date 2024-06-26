import logo from './logo.svg';
import './App.css';

import StudentList from "./components/student/StudentList";
import DemoState from "./components/DemoState";

function App() {
    let className = "A03"
    const changeNameClass = (event) => {
        console.log(1)
        className = event.target.value;
        console.log(className)
    }
    return (
        <>
            <input onChange={(event) => changeNameClass()}/>
            <input onChange={changeNameClass}/>
            <StudentList nameClass={className}/>
            <DemoState/>
        </>
    );
}

export default App;

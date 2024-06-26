
import './App.css';
import React,{useContext} from "react";
import {StoreContent} from './store'
function App() {
    const [state,dispatch] = useContext(StoreContent)
    console.log(state)
  return (
    <div style={{padding : 20}}>
      <h1>Hello anh em F8</h1>
    </div>
  );
}

export default App;

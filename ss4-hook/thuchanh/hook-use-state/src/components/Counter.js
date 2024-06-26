import {useState} from "react";

const Counter = () =>{
    const [count,setCount] = useState(0);
    const  handleClick = () =>{
        const  newValue =count + 1;
        setCount(newValue);
    };

    return(
        <>
             gia tri {count}
             <div>
                 <button onClick={handleClick}>Tang</button>
             </div>
        </>
    )
}
export default Counter;
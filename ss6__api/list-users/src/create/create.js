import React, {useState} from "react";
import {Container} from "react-bootstrap";
import '../create/style.css'
import axios from "axios";
// import {useNavigate} from "react-router";
 const Create = () =>{
     const  [user,setUser] = useState({});
     // const navigate = useNavigate();
     function handleChange(event) {
            const {name,value} = event.target;
            console.log({...user, [name]: value})
            setUser({...user,[name]: value});
     }
     const handleClick = async () => {
            try {
                await axios.post("http://localhost:8080/users", user);
                // navigate("/")
            }catch (error) {
                console.log(error.message)
            }
     }
    return(
        <Container>
                <div className="overlay"></div>
                <div className="form-registration popup">
                    <form >
                        <h2>Registration</h2>
                        <div className="content">
                            <div className="input-box">
                                <label htmlFor="id">ID</label>
                                <input type="text" placeholder="Enter id" id="id" name="id" onChange={handleChange} />
                            </div>
                            <div className="input-box">
                                <label htmlFor="name">Username</label>
                                <input type="text" placeholder="Enter username" id="name" name="name" onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="button-container">
                            <button type="submit" onClick={handleClick}>Create</button>
                        </div>
                    </form>
                </div>

        </Container>
    )
}

export default Create;
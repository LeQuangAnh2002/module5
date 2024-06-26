import React, {useState} from "react";
import {Container} from "react-bootstrap";
import '../popup/style.css'
import axios from "axios";
// import {useNavigate} from "react-router";

const Popup = ({ userData, handleClosePopup }) => {

    const {id,name} = userData;
    const  [user,setUser] = useState({id,name});
    // const navigate = useNavigate()

    function handleChange(event) {
        const {name, value} = event.target;

        console.log({...user, [name]: value})

        setUser({...user, [name]: value})
        // setUser({...user,[event.target.name]: event.target.value});
    }

    const handleSubmit = async ()=> {
        try{
            await axios.put(`http://localhost:8080/users/${id}`, user)

    }catch (error) {
            console.log(error.message)
        }
    }
    return(
        <Container>

            <div  className="container">
                <div className="overlay"></div>
            <div className="popup">
                <button className="close-btn" onClick={handleClosePopup}>X</button>

                <form className="form">
                    <h2>Detail User</h2>
                    <div className="form-element">
                        <label htmlFor="id">ID</label>
                        <input type="text" id="id" name="id" value={user.id || ""} onChange={handleChange} placeholder="Enter id"/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="user">User Name</label>
                        <input type="text" id="user" name="name" value={user.name|| ""} onChange={handleChange} placeholder="Enter User Name"/>
                    </div>

                    <div className="form-element">
                        <button onClick={handleSubmit}>Update</button>
                    </div>

                </form>
            </div>
            </div>


        </Container>
    )
};
export default Popup;
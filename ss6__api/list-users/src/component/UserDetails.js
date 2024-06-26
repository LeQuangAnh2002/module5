import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import {useNavigate} from "react-router";

export  default  function  UserDetails() {
    const {userID} = useParams();
    //nêu useID không tồn tại, !userID sẽ trả về true
    const isCreate = !userID;
    const  [user,setUser] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() =>{
        if (userID){
            axios.get(  `http://localhost:8080/users/${userID}`)
                .then(res=>{

                    setUser(res.data);
                    setDataLoaded(true);

                })
                .catch(err =>{

                    throw  err;
                });
        }
        else {
            // Trường hợp thêm mới

            setDataLoaded(true);
        }

    },[userID]);

    function handleChange(event) {
        setUser({...user,[event.target.name]: event.target.value});
    }
    const handleSubmit = ()=> {
       if(isCreate){
           console.log(isCreate)
           axios
               .post("http://localhost:8080/users", user)
               .then(res => {

                   alert(`Create user ${user.name} successfully!!!`);
                   navigate("/")

               })
               .catch(err => {
                   throw err;
               });
       }else{
           axios
               .put(`http://localhost:8080/users/${userID}`, user)
               .then(res => {
                   alert(`Update user ${user.name} successfully!!!`);
                   navigate("/")
               })
               .catch(err => {
                   throw err;
               });
       }
    }

    if (!dataLoaded) {
        return <p>Loading...</p>;
    }
    return(
        <div>
            <h1>User Details</h1>
            <form>
                <div>
                    <label>Id</label>
                    <input name="id" value={user.id || ""} onChange={handleChange} />
                </div>
                <div>
                    <label>Name</label>
                    <input name="name" value={user.name || ""} onChange={handleChange} />
                </div>

                <button type="button" onClick={handleSubmit}>
                    {isCreate ? 'Create' : 'Update'}
                </button>
            </form>
        </div>
    )
}
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fakeLogin} from "../redux/action";
import {useEffect, useState} from "react";

export default function Login() {
const navigate = useNavigate();
const dispatch = useDispatch();
const [user,setUser] = useState({username:'',password:''});
const userlogined  = useSelector(state => state.userlogined);
const setValueForUser  = (key,value) => {
    const newVal = {...user,[key]:value};
    setUser(newVal);
}

const login = () => {
    dispatch(fakeLogin(user));
};
useEffect(() =>{
    if(userlogined.username){
        navigate('/users');
    }
},[userlogined,navigate]);

    return (
        <form>
            <label>User name</label>
            <input
                id="username"
                onChange={e => setValueForUser("username", e.target.value)}
                type="text"
            />
            <label>Password</label>
            <input
                id="password"
                onChange={e => setValueForUser("password", e.target.value)}
                type="password"
            />
            <button
                type="button"
                onClick={() => {
                    login();
                }}
            >
                Login
            </button>
        </form>
    );
}
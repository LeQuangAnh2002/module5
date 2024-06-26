import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import '../display/style.css';
import {Container,} from "react-bootstrap";
function NavigationBar() {
    return (
        <Container>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container" >
                        <div className="main-menu">
                            <div className="logo-left">
                                <img
                                    src="https://cdn.nhanlucnganhluat.vn/uploads/images/051D288B/logo/2018-12/Logo-FURAMA-RESORT.jpg"
                                    style={{width:"50px",
                                        height : "50px",
                                        borderRadius :"50%"}}
                                    alt=""
                                />
                            </div>
                            <div className="contain-menu" style={{flexGrow:"1"}}>
                                <ul style={{marginRright: "10px",
                                    justifyContent: "end"
                                }}>
                                    <li className="active">
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to={"/employee"}>Employee</Link>
                                    </li>
                                    <li>
                                        <Link to={"/customer"}>Customer</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Service</Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}>Contract</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="search-menu">
                                <input type="text" placeholder="Search" />
                                <button className="btn-search">
                                    <SearchIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </Container>
    )
}
export default NavigationBar;
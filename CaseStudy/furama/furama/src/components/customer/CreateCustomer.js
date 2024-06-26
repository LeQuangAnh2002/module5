import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import * as customerService from "../service/CustomerService"
import { toast } from "react-toastify";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from 'react-router-dom';
import NavigationBar from '../display/NavigationBar';
import Headers from '../display/Headers';
import { Done } from "@mui/icons-material";
import {date} from "yup";
import React from "react";
import Container from "react-bootstrap/Container";

function CreateCustomer() {
    const navigate = useNavigate();
    const initValue = {
        name: "",
        birthday: "",
        gender: "",
        cardNumber: "",
        phoneNumber: "",
        email: "",
        customerType: "",
        address: ""
    }
    const validateSchema = {
        name: Yup.string()
            .required("Name is not empty !!!")
            .matches(/^[A-Za-z\s]+$/, "name  invalid")
            .min(3,"Tên phải có ít nhất 2 ký tự")
            .max(50,"Tên không quá 50 ký tự"),
        birthday: Yup.date()
            .required("Birthdate is not empty !!!")
            .max(new Date(),"Ngày ko đơn lớn hơn ngày hiện tại"),
        phoneNumber: Yup.string().required("PhoneNumber is not empty !!!")
            .matches(/^090\d{7}$/, "Phai dung dinh dang (090XXXXXXX)"),
        cardNumber: Yup.string().required("CardNumber is not empty !!!")
            .matches(/^.{9}$/, "Phai dung dinh dang (XXXXXXXXX)"),
        email: Yup.string().required("Email is not empty !!!")
            .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "name invalid"),

    }
    ///^NV-\d{4}$/ mã nhân viên theo định dạng 
    
    const createCustomer = async (values) => {
        try {
            await customerService.createCustomer(values);
            navigate("/customer")
            toast.success("Them moi thanh cong !!!")
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            {/*<Headers></Headers>*/}
            <NavigationBar />
            <Container>
                <div className="container">
                    <h1 style={{ textAlign: "center" }}>Create Customer</h1>
                    <Formik initialValues={initValue} onSubmit={(values) =>  createCustomer(values)} validationSchema={Yup.object(validateSchema)}>


                        <Form>
                            <div className='mb-3'>
                                <label htmlFor='name' className='form-label'>Name</label>
                                <Field type='text' className='form-control' id='name' name='name' />
                                <ErrorMessage name="name" component="span" style={{ color: "red" }}></ErrorMessage>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='birthday' className='form-label'>Birthday</label>
                                <Field type='date' className='form-control' id='birthday' name='birthday' />
                                <ErrorMessage name="birthday" component="span" style={{ color: "red" }}/>
                            </div>
                            <div className='mb-3'>
                                <div className="form-check form-check-inline">
                                    <Field className="form-check-input" type="radio" name="gender" id="inlineRadio1"
                                           value="Male" />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Field className="form-check-input" type="radio" name="gender" id="inlineRadio2"
                                           value="FeMale" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">FeMale</label>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='cardNumber' className='form-label'>CardNumber</label>
                                <Field type='text' className='form-control' id='cardNumber' name='cardNumber' />
                                <ErrorMessage name="cardNumber" component="span" style={{ color: "red" }}></ErrorMessage>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='phoneNumber' className='form-label'>PhoneNumber</label>
                                <Field type='text' className='form-control' id='phoneNumber' name='phoneNumber' />
                                <ErrorMessage name="phoneNumber" component="span" style={{ color: "red" }}></ErrorMessage>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>Email</label>
                                <Field type='email' className='form-control' id='email' name='email' />
                                <ErrorMessage name="email" component="span" style={{ color: "red" }}></ErrorMessage>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='customerType' className='form-label'>CustomerType</label>
                                <Field as='select' className='form-select' id='customerType' name='customerType'>
                                    <option value='VIP'>VIP</option>
                                    <option value='Diamond'>Diamond</option>
                                    <option value='Gold'>Gold</option>
                                    <option value='Silver'>Silver</option>
                                </Field>
                                <ErrorMessage name="customerType" component="span" style={{ color: "red" }}></ErrorMessage>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='address' className='form-label'>Address</label>
                                <Field type='text' className='form-control' id='address' name='address' />
                                <ErrorMessage name="address" component="span" style={{ color: "red" }}></ErrorMessage>
                            </div>
                            <div style={{ textAlign: "center" }}>

                                <button type="submit" className="btn btn-primary">Create</button>

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="button" className="btn btn-danger">
                                    <Link to={"/customer"} style={{ color: "white", textDecoration: "none" }}>Back to list</Link>
                                </button>
                            </div>
                            <br></br>
                            <hr></hr>
                        </Form>
                    </Formik>
                </div>
            </Container>
        </>
    )
}
export default CreateCustomer;
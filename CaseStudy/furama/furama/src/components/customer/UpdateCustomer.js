import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as customerService from "../service/CustomerService"
import { toast } from "react-toastify";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from 'react-router-dom';
import NavigationBar from '../display/NavigationBar';

import { Done } from "@mui/icons-material";
function UpdateCustomer() {

    let {id} = useParams();
    const [customer, setCustomer] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getCustomerById(id);

    }, [id]);

    const getCustomerById = async (id) =>{
        try{ 
            let temp = await customerService.getCustomerById(id);
            console.log(temp);
            setCustomer(temp);
        }catch(e){
            console.log(e);
        }
    }

    const updateNow = async (values) =>{
        const comfirmed = window.confirm("Bạn có chắc chắn muốn sửa khách hàng này ?");
        if(comfirmed){
            await customerService.updateCustomer(id,values);
            console.log(id,values);
            toast.success("cap nhap thanh cong !!")
            navigate("/customer");
        }
    }

    if(!customer){
        console.log(customer);
        return null;
    }

    const initValue = {
        name: customer.name,
        birthday: customer.birthday,
        gender: customer.gender,
        cardNumber: customer.cardNumber,
        phoneNumber: customer.phoneNumber,
        email: customer.email,
        customerType: customer.customerType,
        address: customer.address
    }

    const validateSchema = {
        name: Yup.string().required("Name is not empty !!!")
            .matches(/^[A-Z][a-zA-Z]*$/, "name  invalid"),
        birthday: Yup.string().required("Birthdat is not empty !!!"),
        phoneNumber: Yup.string().required("PhoneNumber is not empty !!!")
            .matches(/^090\d{7}$/, "Phai dung dinh dang (090XXXXXXX)"),
        cardNumber: Yup.string().required("CardNumber is not empty !!!")
            .matches(/^.{9}$/, "Phai dung dinh dang (XXXXXXXXX)"),
        email: Yup.string().required("Email is not empty !!!")
            .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "name invalid"),

    }

    return (
        <>
            <NavigationBar />
            <div className="container">
                <h1 style={{ textAlign: "center" }}>Update Customer</h1>
                <Formik initialValues={initValue}
                    onSubmit={(values) => {
                       updateNow(values);
                    }}
                    validationSchema={Yup.object(validateSchema)}
                >
                    {
                        ({ isSubmitting }) => (
                            <Form>
                                <div className='mb-3'>
                                    <label htmlFor='name' className='form-label'>Name</label>
                                    <Field type='text' className='form-control' id='name' name='name' />
                                    <ErrorMessage name="name" component="span" style={{ color: "red" }}></ErrorMessage>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='birthday' className='form-label'>Birthday</label>
                                    <Field type='date' className='form-control' id='birthday' name='birthday' />
                                    <ErrorMessage name="birthday" component="span" style={{ color: "red" }}></ErrorMessage>
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
                                    {
                                        isSubmitting ? <></> :
                                            <button type="submit" className="btn btn-primary">Sửa</button>
                                    }
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button type="button" className="btn btn-primary">
                                        <Link to={"/customer"} style={{ color: "white", textDecoration: Done }}>Back to list</Link>
                                    </button>
                                </div>
                                <br></br>
                                <hr></hr>
                            </Form>
                        )
                    }
                </Formik>

            </div>
        </>
    )
}
export default UpdateCustomer;
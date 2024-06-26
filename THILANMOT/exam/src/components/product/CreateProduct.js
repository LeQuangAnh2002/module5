import {Link, useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

import React,{useState,useEffect} from 'react';
import * as productService from "../service/ProductService";

import {toast} from "react-toastify";
function CreateProduct() {
    const navigate = useNavigate()
    const [categories,setCategories] = useState([]);

    const initValue = {
        id : "",
        productName : "",
        quantity: "",
        price: "",
        inputDate: "",
        category: {},

    }
    const validateSchema = {
        id : Yup.string()
            .required("Id is not empty")
            .matches(/^PROD-\d{4}$/,"ID phải đúng định dạng [PROD-XXXX]"),
        productName: Yup.string()
            .required("Name is not empty !!!"),
            // .min(3,"Tên phải có ít nhất 2 ký tự")
            // .max(100,"Tên không quá 100 ký tự")
        inputDate: Yup.date()
            .required("Date is not empty !!!")
            .max(new Date(),"Ngày không được lớn hơn ngày hiện tại"),
        quantity: Yup.number().required("Quantity is not empty !!!")
            .min(0,"Số lượng phải lớn hơn 0"),
        price: Yup.number().required("CardNumber is not empty !!!")
            .min(0,"Giá lượng phải lớn hơn 0"),
        category: Yup.string().required("Category is not empty !!!")


    }
    useEffect(()=>{
        getAllCategories();
    })
    const  getAllCategories = async () =>{
        try {
            const temp = await productService.getAllCategory();
            setCategories(temp)
        }catch (e) {
            console.log(e)
        }
    }
    const createProduct = async (value) =>{
        try {
            console.log(value)
            value.category = JSON.parse(value.category);
             await productService.createProduct(value);
            toast.success("Thêm mới thành công");
            navigate("/")

        }catch (e) {
            console.log(e)
        }
    }

    if(!categories) return null
    return(
        <Container>

                <h1 style={{ textAlign: "center" }}>Create Product</h1>

                <Formik initialValues={initValue} onSubmit={(value) =>  createProduct(value)} validationSchema={Yup.object(validateSchema)} >
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='id' className='form-label'>Mã Sản Phẩm</label>
                            <Field type='text' className='form-control' id='id' name='id' />
                            <ErrorMessage name="id" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='productName' className='form-label'>Tên Sản Phẩm</label>
                            <Field type='text' className='form-control' id='productName' name='productName' />
                            <ErrorMessage name="productName" component="span" style={{ color: "red" }}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='price' className='form-label'>Giá</label>
                            <Field type='text' className='form-control' id='price' name='price' />
                            <ErrorMessage name="price" component="span" style={{ color: "red" }}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='quantity' className='form-label'>Số Lượng</label>
                            <Field type='text' className='form-control' id='quantity' name='quantity' />
                            <ErrorMessage name="quantity" component="span" style={{ color: "red" }}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='inputDate' className='form-label'>Ngày Nhập</label>
                            <Field type='date' className='form-control' id='inputDate' name='inputDate' />
                            <ErrorMessage name="inputDate" component="span" style={{ color: "red" }}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='category' className='form-label'>Categories</label>
                            <Field as='select' className='form-select' id='category' name='category'>
                                <option value="">Tùy Chọn</option>
                                {
                                    categories.map((category) =>(
                                        <option  value={JSON.stringify(category)} key={category.id}>{category.name}</option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage name="category" component="span" style={{ color: "red" }}/>
                        </div>

                        <div style={{ textAlign: "center" }}>

                            <button type="submit" className="btn btn-primary">Create</button>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button" className="btn btn-danger">
                                <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>Back to list</Link>
                            </button>
                        </div>
                        <br></br>
                        <hr></hr>
                    </Form>
                </Formik>

        </Container>
    )
}
export default CreateProduct;
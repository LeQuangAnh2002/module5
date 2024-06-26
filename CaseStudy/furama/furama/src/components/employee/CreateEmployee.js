import React, {useEffect, useState} from "react";
import * as employeeService from "../service/EmployeeService";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavigationBar from "../display/NavigationBar";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
function CreateEmployee() {
    const navigate = useNavigate();
    const [educations,setEducations] = useState([]);
    const [positions,setPositions] = useState([]);
    const [divisions,setDivisions] = useState([]);

    const employee = {
        "name": "",
        "birthday": "",
        "cardNumber": "",
        "phoneNumber": "",
        "email": "",
        "education" : {},
        "position": {},
        "division" :{},
        "salary" :""
    }
    const validateSchema = {
        name : Yup.string()
            .required("Name is not empty!!!")
            .min(3,"Tên phải có ít nhất 2 ký tự")
            .max(50,"Tên không quá 50 ký tự"),
        birthday : Yup.date()
            .required("Birthday is not empty!!!")
            .max(new Date(),"Ngày không được lớn hơn ngày hiện tại!!"),
        cardNumber : Yup.string()
            .required("Card number is not empty!!")
            .matches(/^.{9}$/, "Phai dung dinh dang (XXXXXXXXX)"),
        phoneNumber: Yup.string()
            .required('Phone number is not empty')
            .matches(/^090\d{7}$/, "Phai dung dinh dang (090XXXXXXX)"),
        email: Yup.string().required("Email is not empty !!!")
            .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "name invalid"),


    }

    useEffect(() =>{
        getAllEducaiton();
        getAllPosition();
        getAllDivision();
    })
    const getAllEducaiton = async () =>{
       try{
           const temp = await employeeService.getAllEducation();
           setEducations(temp);
       }catch (e) {
           console.log(e);
       }
    }
    const getAllPosition = async () =>{
        try{
            const temp = await employeeService.getAllPosition();
            setPositions(temp);
        }catch (e) {
            console.log(e)
        }
    }
    const getAllDivision = async () =>{
        try {
            const temp = await employeeService.getAllDivisiton();
            setDivisions(temp)
        }catch (e) {
            console.log(e)
        }
    }
    const createEmployee = async (values) => {
        try {
            values.education = JSON.parse(values.education);
            values.position = JSON.parse(values.position);
            values.division = JSON.parse(values.division);
            await employeeService.createEmployee(values);


            navigate("/employee")
            toast.success("Them moi thanh cong !!!")
        } catch (e) {
            console.log(e);
        }
    }
    if(!educations) return null;
    if(!positions) return null;
    if(!divisions) return null;

    return(
        <>
            <NavigationBar />
            <Container>
                <h1 style={{textAlign:"center"}}>Create Employee</h1>
                <Formik initialValues={employee} onSubmit={(values) =>createEmployee(values)} validationSchema={Yup.object(validateSchema)}>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <Field type="text" className="form-control" id="name" name="name" />
                            <ErrorMessage name="name" component="span" style={{color:"red"}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="birthday" className="form-label">Birthday</label>
                            <Field type="date" className="form-control" id="birthday" name="birthday" />
                            <ErrorMessage name="birthday" component="span" style={{color:"red"}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cardNumber" className="form-label">Card Number</label>
                            <Field type="text" className="form-control" id="cardNumber" name="cardNumber" />
                            <ErrorMessage name="cardNumber" component="span" style={{color: 'red'}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <Field type="text" className="form-control" id="phoneNumber" name="phoneNumber" />
                            <ErrorMessage name="phoneNumber" component="span" style={{color: 'red'}} ></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field type="email" className="form-control" id="email" name="email" />
                            {/*<ErrorMessage name"email" component="span" style={{color:"red"}}/>*/}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="education" className="form-label">Education</label>
                            <Field as="select" className="form-select" id="education" name="education" >
                                <option value="">Tùy chọn</option>
                                {
                                    educations.map((education) =>(
                                        <option value={JSON.stringify(education)} key={education.id} >{education.name}</option>
                                    ))
                                }
                            </Field>
                            {/*<ErrorMessage name"education" component="span" style={{color:"red"}}/>*/}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="position" className="form-label">Position</label>
                            <Field as="select" className="form-select" id="position" name="position" >
                                <option value="">Tùy chọn</option>
                                {
                                    positions.map((position) =>(
                                        <option value={JSON.stringify(position)} key={position.id}>{position.name}</option>
                                    ))
                                }
                            </Field>
                            {/*<ErrorMessage name"position" component="span" style={{color:"red"}}/>*/}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="division" className="form-label">Division</label>
                            <Field as="select" className="form-select" id="division" name="division" >
                                <option value="">Tùy chọn</option>
                                {
                                    divisions.map((division) =>(
                                        <option value={JSON.stringify(division)} key={division.id}>{division.name}</option>
                                    ))
                                }
                            </Field>
                            {/*<ErrorMessage name"division" component="span" style={{color:"red"}}/>*/}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="salary" className="form-label">Salary</label>
                            <Field type="text" className="form-control" id="salary" name="salary" />
                            {/*<ErrorMessage name"salary" component="span" style={{color:"red"}}/>*/}
                        </div>
                        <div style={{ textAlign: "center" }}>

                            <button type="submit" className="btn btn-primary">Create</button>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button" className="btn btn-danger">
                                <Link to={"/employee"} style={{ color: "white", textDecoration: "none" }}>Back to list</Link>
                            </button>
                        </div>
                        <br></br>
                        <hr></hr>
                    </Form>
                </Formik>

            </Container>
        </>
    )
}
export default CreateEmployee;
import React, { useEffect, useState } from "react";
import * as customerService from "../service/CustomerService"
import { toast } from "react-toastify";
import NavigationBar from '../display/NavigationBar';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Link } from 'react-router-dom';
import {Container,Modal} from "react-bootstrap";
import { Done } from "@mui/icons-material";
import {Form} from "formik";
import Button from "bootstrap/js/src/button";
import Moment from 'moment';
function ListCustomer() {
    const [customers, setCustomers] = useState([]);
    const [search,setSearch] = useState([]);
    const [userName, setUserName] = useState('');
    const [show,setShow] = useState(false);
    const [deleteId,setDeleteID] = useState('');


    // Phân trang
    // const [currentPage, setCurrentPage] = useState(1);
    // Số lượng đối tượng trong 1 trang
    // const recordsPerPage = 3;
    // const lastIndex = currentPage * recordsPerPage;
    // const firstIndex = lastIndex - recordsPerPage;
    // const records = customers.slice(firstIndex, lastIndex);
    // const npage = Math.ceil(customers.length / recordsPerPage);
    // const numbers = [...Array(npage + 1).keys()].slice(1);

    // Hiển thị
    useEffect(() => {
        getAllCustomer();
    }, [])

    const getAllCustomer = async () => {
        try {
            let temp = await customerService.findAll();
            setCustomers(temp);
            setSearch(temp);

        } catch (e) {
            console.log(e);
        }
    }
    const handleShowName = (userName) => {

        setUserName(userName);

    };

    // Tìm kiếm
    //1. filter một hàm trong JS. nó lọc qua mảng customer và trả về một mảng mới chỉ chứa các phần tử có thuộc tính name chứa trong evt.target.value
    //2. f là một tham số đại diện cho mỗi tử trong mảng customers, f đại diện cho mỗi khách hàng
    //3..toLowerCase() được gọi trên chuỗi f.name để chuyển đổi tên của khách hàng thành chữ thường.
    // Điều này giúp đảm bảo việc tìm kiếm ko phân biệt chữ hoa chữ thường
    //4..includes(evt.target.value) là một phương thức được gọi trên chuỗi đã được chuyển đổi thành chữ thường.
    // Nó kiểm tra xem giá trị của evt.target.value có xuất hiện trong chuỗi đó hay không. Nếu giá trị tìm kiếm được tìm thấy trong tên của khách hàng,
    // thì biểu thức này sẽ trả về true, ngược lại sẽ trả về false.
     const Filter = (evt) =>{
         setSearch(customers.filter( f => f.name.toLowerCase().includes(evt.target.value.toLowerCase()) ||
                                          f.customerType.toLowerCase().includes(evt.target.value.toLowerCase())
         ))

        // setCustomers(customers.filter( f => f.name.toLowerCase().includes(evt.target.value)))
     }

    // Xóa
    const deleteCustomer = async () => {
        try {
                await customerService.deleteCustomer(deleteId);

                getAllCustomer();
                setShow(false);
                toast.success("Xóa thành công!!!");

        } catch (e) {
            console.log(e);
        }
    }

    const  handleClose= () =>{
        setShow(false);
    }
    const  handleClickDelete = (id) =>{
        setDeleteID(id);
        setShow(true);


    }

    // Giao diện
    return (
    <Container>
        <div>


            <NavigationBar />
            <br></br>
            <h1 style={{ textAlign: "center" }}>List Customer</h1>
            <div className="mb-3">
                <input type="text" className="form-control"  placeholder="Tìm kiếm..."  onChange={Filter}/>
            </div>

            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Birthday</th>
                    <th>Gender</th>
                    <th>CardNumber</th>
                    <th>PhoneNumber</th>
                    <th>Email</th>
                    <th>CustomerType</th>
                    <th>Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {search?.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{Moment(item.birthday).format("DD/MM/yyyy")}</td>
                            <td>{item.gender}</td>
                            <td>{item.cardNumber}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.email}</td>
                            <td>{item.customerType}</td>
                            <td>{item.address}</td>
                            <td>

                                <button className="btn btn-warning">
                                    <Link to={`/customer/update/${item.id}`} style={{ color: "white", textDecoration: "none" }} >Update</Link> </button>
                            </td>
                            <td>

                                <button className="btn btn-danger" type="submit" onClick={() => {handleClickDelete(item.id); handleShowName(item.name) }}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            {show && <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa khách hàng này ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn xóa khách hàng {userName}  ?</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary" onClick={deleteCustomer}>
                        OK
                    </button>
                    <button className="btn btn-danger" onClick={handleClose}>
                        Cancel
                    </button>
                </Modal.Footer>
            </Modal>}
            <ToastContainer />
            {/*<nav>*/}
            {/*    <ul className="pagination justify-content-center">*/}
            {/*        {currentPage > 1 && (*/}
            {/*            <li className="page-item">*/}
            {/*                <Link href="" className="page-link" onClick={prePage}> - </Link>*/}
            {/*            </li>*/}
            {/*        )}*/}
            {/*        {numbers.map((n, i) => {*/}
            {/*            return (*/}
            {/*                <li*/}
            {/*                    className={`page-item ${currentPage === n ? "active" : ""}`}*/}
            {/*                    key={i}*/}
            {/*                >*/}
            {/*                    <button href="#" className="page-link" onClick={() => changeCPage(n)}>*/}
            {/*                        {n}*/}
            {/*                    </button>*/}
            {/*                </li>*/}
            {/*            );*/}
            {/*        })}*/}
            {/*        {currentPage < numbers.length && (*/}
            {/*            <li className="page-item">*/}
            {/*                <Link href="" className="page-link" onClick={nextPage}> + </Link>*/}
            {/*            </li>*/}
            {/*        )}*/}
            {/*    </ul>*/}
            {/*</nav>*/}
            <button type="button" className="btn btn-primary">
                <Link to={"/create"} style={{ color: "white", textDecoration: "none" }}>Create</Link>
            </button>
            <hr></hr>
        </div>
    </Container>
    );
    // function changeCPage(id) {
    //     setCurrentPage(() => id);
    // }
    // function nextPage() {
    //     if (currentPage !== npage) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // }
    // function prePage() {
    //     if (currentPage !== 1) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // }
}
export default ListCustomer;
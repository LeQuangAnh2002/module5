import React, {useEffect, useMemo, useState} from "react";
import NavigationBar from "../display/NavigationBar";
import {Link} from "react-router-dom";
import {Container, Modal} from "react-bootstrap";
import {ToastContainer} from "react-toastify";
import * as EmployeeService from "../service/EmployeeService";
import * as employeeService from "../service/EmployeeService";
import moment from "moment";
function Employee() {
        const [employees,setEmployees] = useState([]);
        const [educations,setEducations] = useState([]);
        const [selectedPosition,setSelectedPosition] = useState('');

    useEffect(() => {
        getAllEmployee();
        getAllEducaiton();
    }, [])

        const getAllEmployee = async () =>{
            try {
                let temp = await EmployeeService.findAll();
                setEmployees(temp);
            }catch (error) {
                console.log(error);
            }
        }

    const getAllEducaiton = async () =>{
        try{
            const temp = await employeeService.getAllEducation();
            setEducations(temp);
        }catch (e) {
            console.log(e);
        }
    }
    function getFilteredList() {
        // Avoid filter when selectedCategory is null
        if (!selectedPosition) {
            return employees;
        }
        return employees.filter((item) => item.education.name === selectedPosition);
    }
    //useMemo được sử dụng để tạo một phiên bản memoized (tối ưu hóa) của hàm getFilteredList(). Điều này đảm bảo rằng hàm chỉ được thực thi lại khi các phụ thuộc (selectedPosition và employees) thay đổi, tránh việc thực thi không cần thiết và cung cấp hiệu suất tốt hơn trong các kịch bản có danh sách lớn.
    const filteredList = useMemo(getFilteredList, [selectedPosition, employees]);

    function handleEducationChange(event) {

                const selectedValue = JSON.parse(event.target.value);
                console.log(selectedValue.name);

                setSelectedPosition(selectedValue.name);

    }
    return(
        <Container>
            <div>


                <NavigationBar />
                <br></br>
                <h1 style={{ textAlign: "center" }}>Employee Customer</h1>
                <div className="mb-3">
                    <input type="text" className="form-control"  placeholder="Tìm kiếm..."  />
                </div>
                <div className="mb-3">
                    <select
                        name="education-list"
                        id="education-list"
                        onChange={handleEducationChange}
                    >
                        <option value="[]">All</option>
                        {educations.map((education) =>(
                            <option value={JSON.stringify(education)}  key={education.id}>{education.name}</option>
                        ))}
                    </select>
                </div>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Birthday</th>
                        {/*<th>CardNumber</th>*/}
                        {/*<th>PhoneNumber</th>*/}
                        {/*<th>Email</th>*/}
                        <th>Education</th>
                        <th>Position</th>
                        <th>Division</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredList?.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.birthday}</td>
                                {/*<td>{item.cardNumber}</td>*/}
                                {/*<td>{item.phoneNumber}</td>*/}
                                {/*<td>{item.email}</td>*/}
                                <td>{item.education?.name}</td>
                                <td>{item.position.name}</td>
                                <td>{item.division?.name}</td>

                                <td>

                                    <button className="btn btn-warning">
                                        <Link to={`/employee/update/${item.id}`} style={{ color: "white", textDecoration: "none" }} >Update</Link> </button>
                                </td>
                                <td>

                                    <button className="btn btn-danger" type="submit" >Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                {/*{show && <Modal show={show} onHide={handleClose}>*/}
                {/*    <Modal.Header closeButton>*/}
                {/*        <Modal.Title>Xóa khách hàng này ?</Modal.Title>*/}
                {/*    </Modal.Header>*/}
                {/*    <Modal.Body>Bạn có chắc chắn muốn xóa khách hàng {userName}  ?</Modal.Body>*/}
                {/*    <Modal.Footer>*/}
                {/*        <button className="btn btn-primary" onClick={deleteCustomer}>*/}
                {/*            OK*/}
                {/*        </button>*/}
                {/*        <button className="btn btn-danger" onClick={handleClose}>*/}
                {/*            Cancel*/}
                {/*        </button>*/}
                {/*    </Modal.Footer>*/}
                {/*</Modal>}*/}
                {/*<ToastContainer />*/}

                <button type="button" className="btn btn-primary">
                    <Link to={"/employee/add"} style={{ color: "white", textDecoration: "none" }}>Create</Link>
                </button>
                <hr></hr>
            </div>
        </Container>
    )
}
export default Employee;
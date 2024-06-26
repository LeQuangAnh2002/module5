import {useEffect, useState} from "react";
import * as studentService from "../service/StudentService"


function StudentList(props) {
    const [students,setStudents] = useState([]);
    useEffect(() =>{
        getAll();
    })
    const getAll = async () =>{
        const temp = await studentService.getAll();
        setStudents(temp);
    }
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Classname</th>
                    <th>Gender</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((item, index) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.classname?.nameClass}</td>
                            <td>{item.gender ? "Nam" : "Nữ"}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>


        </>
    )
}

export default StudentList;
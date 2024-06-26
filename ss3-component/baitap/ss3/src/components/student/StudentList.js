import {Component} from "react";

class StudentList extends Component {
    students;
    id = " a03"
    constructor(props) {
        super(props);
        this.students = [
            {
                id: 1,
                name: "HaiTT",
                classroom: {
                    id: 1,
                    nameClass: "A03"
                },
                gender: true
            },
            {
                id: 2,
                name: "HaiTT",
                classroom: {
                    id: 1,
                    nameClass: "A03"
                },
                gender: false
            }
        ]
    }
    render() {
        return (
            <>
                <h1>Danh sách học sinh lớp {this.props.nameClass}</h1>
                <h1 id={this.id}>A03</h1>
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
                        this.students.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.classroom.nameClass}</td>
                                <td>{item.gender ? "Nam" : "Nữ"}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </>
        )
    }
}

export default StudentList;
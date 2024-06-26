
import React from "react";
import './App.css';

function App() {
    const id = " a03"
    const students = [
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
    return (
        // React.createElement("h1", {id: "a03", name:"a03", className: "abc"}, "A03")
        // <> </> là các thẻ rỗng đặc biệt trong JSX. chúng được sử dụng để bọc nhiều phần tử JSX
        //mà ko cần phải sử dụng một phần tử cha như <div>

        // Cặp dấu ngoặc tròn () trong return là một cú pháp js để nhóm giá trị trả về. Trong trường
        // hợp của React, cặp dấu ngoặc tròn() được sử dụng để nhóm các phần tử JSX lại với nhau.

        //Khi sử dụng JSX trong return, chúng ta thường trả về một lệnh JSX duy nhất, chẳng hạn một
        // một phần tử <div> bao trọn các thành phần con. Tuy nhiên, JSX yêu cầu phải có một phần tử góc duy nhất,
        // nghĩa là chỉ có một phần tử cha bao trọn các phần tử con. Chúng ta sử dụng dấu ngoặc tròn() để nhóm
        // các phần tử con lại với nhau và tạo ra một phần tử cha duy nhất
        <>
            <h1 id={id}>A03</h1>
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
                            <td>{item.classroom.nameClass}</td>
                            <td>{item.gender ? "Nam" : "Nữ"}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    );
}

export default App;

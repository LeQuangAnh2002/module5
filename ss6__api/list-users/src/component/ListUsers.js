
import React, { useEffect, useState} from "react";
import axios from "axios";
import {Container,Row,Table,Modal,Button} from "react-bootstrap";
import Popup from '../popup/popup-form'
import Create from "../create/create";
// import {useNavigate} from "react-router";

function User(){
    const  [users,setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteId,setDelete] = useState("");
    const [show,setShow] = useState(false);
    const [showCreate,setShowCreate] = useState(false);
    const [userName, setUserName] = useState('');
    const [showPopup,setShowPopup] = useState(false);
    const [userData,setUserData] = useState({ id :"",name :""});

    // const navigate = useNavigate();



    //useEffect nhận hai tham số: một là một hàm callback chứa các side effect,
    // và hai là một mảng dependency chứa các biến mà side effect này phụ thuộc vào.
    useEffect(()=>{
        getUsers()
            .then(res => {
                setUsers(res.data);
                setLoading(false)
            })
            .catch(err => {
                throw err;
            });
    },[]);

    const handleClickCreate = () =>{
        setShowCreate(!showCreate)
    }


    const getUsers = async () => {
        //cú pháp async/await
        await new Promise(resolve => {setTimeout(resolve,1000);});
        return await axios.get("http://localhost:8080/users");
    };
    //detail
    const handleClickDetail = async(id) =>{
        try {
            const response = await axios.get(`http://localhost:8080/users/${id}`);
            setUserData(response.data);
            setShowPopup(true);
            console.log(response.data);

        }catch (error) {
            console.error( error.message);
        }
    }

    // delete
    const  handleClose= () =>{
     setShow(false);
    }

    const  handleClickDelete = (id) =>{
        setDelete(id);
        setShow(true);


    }

    const handleShowName = (userName) => {
        setUserName(userName);
        console.log(userName)
        setShow(true);
    };

    const handleDeleteItem = async () => {
        try {
         await axios.delete(`http://localhost:8080/users/${deleteId}`);
            console.log('Dữ liệu file JSON đã được cập nhật thành công');
            setShow(false);
            setUsers(users.filter(user => user.id !== deleteId));
            // navigate("/")
        } catch (error) {
            console.error('Lỗi cập nhật dữ liệu file JSON:', error.message);

        }
    };
    const handleClosePopup = () => {
        setShowPopup(!showPopup);
    };



    if(loading){
        return <p>Loading...</p>;
    }
    return (

        <Container>
            <Row>
                <button className="btn btn-success " style={ {display: 'inline', width: '130px' ,margin: '10px 0px'}} onClick={handleClickCreate}>Create</button>
                <Table striped bordered hover >
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users && users.map((item,index) =>{
                        return(
                            <tr key={item.id}>
                                <td>{index+1}</td>
                                <td><a href={`/user/${item.id}`}> {item.name} </a></td>
                                <td>
                                    <button className="btn btn-info show-modal" onClick={() =>{ handleClickDetail(item.id)}} style={{margin :'0 10px'}}>Update</button>

                                    <button className="btn btn-danger " onClick={() => {handleClickDelete(item.id); handleShowName(item.name);}}>Delete</button>

                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Xóa học sinh này ?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>`Bạn có chắc chắn muốn xóa học sinh {userName} ?`</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleDeleteItem}>
                            OK
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                           Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
                {showPopup && (<Popup userData={userData} handleClosePopup={handleClosePopup} />)}

                {showCreate && (<Create/>)}
            </Row>
        </Container>
    );

}
export default User;
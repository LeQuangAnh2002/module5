import React from 'react';
import {Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import CloseIcon from '@mui/icons-material/Close';
import NavigationBar from '../display/NavigationBar';
import Headers from '../display/Headers';
function ListService() {
    const services = [
        { id: 1, name: 'Buffets', description: 'Combo sáng , trưa , tối', image: 'https://resortdanang.info/wp-content/uploads/2018/11/nha-hang-cafe-indochine-resort-furama-da-nang.jpg' },
        { id: 2, name: 'Dịch vụ 2', description: '2 người', image: 'https://resortdanang.info/wp-content/uploads/2018/11/nha-hang-don-ciprianas-furama-da-nang.jpg' },
        { id: 3, name: 'Dịch vụ 3', description: 'Mô tả dịch vụ 3', image: 'https://resortdanang.info/wp-content/uploads/2018/12/steak-house-furama-da-nang-1.jpg' },
        { id: 4, name: 'Dịch vụ 4', description: 'Mô tả dịch vụ 4', image: 'http://vtr.org.vn/FileManager/Anh%20web%202019/Thang%2010/2131/furama%20resort%20(1).jpg' },
        { id: 5, name: 'Dịch vụ 5', description: 'Mô tả dịch vụ 5', image: 'https://chungcu365.com/uploads/22/a-119/20191211160802-763a.jpg' },
        { id: 6, name: 'Dịch vụ 6', description: 'Mô tả dịch vụ 6', image: 'https://resortdanang.info/wp-content/uploads/2018/11/ho-boi-hyatt-resort-da-nang.jpg' }
    ];

    return (
            <div>
                {/*<Headers></Headers>*/}
                <NavigationBar/>
                <div className="service-container">
                    <div className="service-card">
                        <div className="container mt-5">
                            <div className="row">
                                {services.map((service) => (
                                    <div className="col-lg-4 mb-5 text-center" key={service.id}> 
                                        <Card  style={{ width: '25rem', height: '25rem' }}>
                                            <div className="image-container">
                                                <Card.Img variant="top" src={service.image} />
                                            </div>
                                            <Card.Body>
                                                <div className="content-container">
                                                    <Card.Title>{service.name}</Card.Title>
                                                    <Card.Text>{service.description}</Card.Text>
                                                </div>
                                                <div className="button-container">
                                                    <Button variant="primary" as={Link} to={`/services/${service.id}/edit`} className="btn-edit">
                                                        Sửa
                                                    </Button>
                                                </div>
                                                <Button variant="danger" style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                                    <CloseIcon />
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
}

export default ListService;
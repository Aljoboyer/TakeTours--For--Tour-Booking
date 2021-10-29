import React from 'react';
import { Col, Row } from 'react-bootstrap';
import error from '../../asset/error.jpg'
const Notfound = () => {
    return (
        <div className="container-fluid">
            <Row className="d-flex justify-content-center"> 
                <Col lg={8} sm={12} md={12}>
                        <img className="w-100 h-75" src={error} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Notfound;
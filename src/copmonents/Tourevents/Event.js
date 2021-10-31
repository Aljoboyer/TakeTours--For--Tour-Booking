import React from 'react';
import {Card, Col,Button, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './event.css';
const Event = (props) => {
    const {_id,img,name,short,time} = props.event;
    return (
        <Col lg={6} md={12} sm={12} className="cards">
            <Row className="rowss pb-2">
                <Col lg={6} md={6} sm={12}>
                    <img className="rounded imgs img-fluid" src={img} alt="" />
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <h4>{name}</h4>
                    <p className="text-primary"><b>{time}</b></p>
                                <p>{short}</p>
                                <Link to={`/eventregister/${_id}`}><Button className="allbtn ">Book Now</Button></Link>

                </Col>
            </Row>
        </Col>


    );
};

export default Event;
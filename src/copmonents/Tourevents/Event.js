import React from 'react';
import {Card, Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './event.css';
const Event = (props) => {
    const {_id,img,name,short,time} = props.event;
    return (
        <Col className="d-flex justify-content-center" lg={4} sm={12} md={6}>
        <Card className="cards" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p className="text-primary"><b>{time}</b></p>
                    <p>{short}</p>
                </Card.Text>
            </Card.Body>
            <Card.Body className="">
                    <Link to={`/eventregister/${_id}`}><Button className="allbtn ">Book Now</Button></Link>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Event;
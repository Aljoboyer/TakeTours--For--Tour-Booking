import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Yourevent = (props) => {
    const {_id,status,img,date,eventname} = props.event
    return (
        <Col className="Cards" lg={4} sm={12} md={6}>
        <Card  style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{eventname}</Card.Title>
                <Card.Text>
                <b>{date}</b>
                <p><b className="text-primary">{status}</b></p>
                </Card.Text>
            </Card.Body>
            <Card.Body className="">
                    <button onClick={ () => props.DeleteHandler(_id,true)} className="btn btn-danger text-light">Cancel Event</button>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Yourevent;
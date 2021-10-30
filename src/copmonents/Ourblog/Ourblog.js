import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ireland from '../../asset/blog/Ireland.jpg';
import california from '../../asset/blog/California.jpg';
import oxford from '../../asset/blog/Oxford.jpg';
const Ourblog = () => {
    return (
        <Row className="mt-4 mb-4">
            <h2 className="text-center mt-4 mb-4">From our Blog</h2>
             <Col className="d-flex justify-content-center" lg={4} sm={12} md={6}>
        <Card className="cards" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ireland} />
            <Card.Body>
                <Card.Title>48 Fun Things to Do in Killarney, Ireland</Card.Title>
                <Card.Text>
                Killarney has some of the most gorgeous natural landscapes in Ireland. The country’s highest mountains are here, intermingled with green valleys, serene lakes, ancient castles and religious sites.
                </Card.Text>
            </Card.Body>
            <Card.Body className="">
            <button className="blogbtn p-3 rounded fw-bold">More <i className="fas fa-arrow-right"></i></button>
            </Card.Body>
            </Card>
        </Col>


        <Col className="d-flex justify-content-center" lg={4} sm={12} md={6}>
        <Card className="cards" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={california} />
            <Card.Body>
                <Card.Title>52 Fun Things to Do in Hollywood, California</Card.Title>
                <Card.Text>
                A world-famous playground for the elite, a beacon for all things cinema and entertainment, and a tourist Mecca for decades now, Hollywood is perhaps the most exciting place to visit in California.
                </Card.Text>
            </Card.Body>
            <Card.Body className="">
            <button className="blogbtn p-3 rounded fw-bold">More <i className="fas fa-arrow-right"></i></button>
            </Card.Body>
            </Card>
        </Col>



        <Col className="d-flex justify-content-center" lg={4} sm={12} md={6}>
        <Card className="cards" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={oxford} />
            <Card.Body>
                <Card.Title>51 Fun Things to Do in Oxford, UK</Card.Title>
                <Card.Text>
                Oxford is a town just 90km northwest of London that was founded in the 8th century and is home to the oldest university in the English-speaking world.With its long-spanning history, the architecture in Oxford ranges from ancient Anglo-Saxon
                </Card.Text>
            </Card.Body>
            <Card.Body className="">
            <button className="blogbtn p-3 rounded fw-bold">More <i className="fas fa-arrow-right"></i></button>
            </Card.Body>
            </Card>
        </Col>
                
        </Row>
    );
};

export default Ourblog;
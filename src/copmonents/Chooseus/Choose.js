import React from 'react';
import {Col, Row} from 'react-bootstrap';
import first from '../../asset/blog/first.png';
import two from '../../asset/blog/two.jpg';
import three from '../../asset/blog/three.jpg';
import './choose.css';
const Choose = () => {
    return (
        <Row className="mt-4 mb-4">
            <h2 className="text-center mb-3 mt-4">Why book with <span className="span2">Take</span><span>Tours</span>?</h2>
            <Col lg={6} md={6} sm={12} className="chooseone mb-2">
                <Row>
                    <Col lg={6} sm={12} md={6}>
                    <i className="fab fa-fantasy-flight-games fa-2x mt-3"></i>
                        <h5><b>Ultimate flexibility</b></h5>
                        <p>You’re in control, with free cancellation and payment options to satisfy any plan or budget.</p>
                    </Col>
                    <Col lg={6} sm={12} md={6}>
                    <i className="fab fa-empire fa-2x mt-3"></i>
                        <h5><b>Memorable experiences</b></h5>
                        <p>Browse and book tours and activities so incredible, you’ll want to tell your friends.</p>
                    </Col>
                    <Col lg={6} sm={12} md={6}>
                    <i className="fas fa-thermometer-three-quarters fa-2x"></i>
                        <h5><b>Quality at our core</b></h5>
                        <p>High quality standards. Millions of reviews. A Tripadvisor company.</p>
                    </Col>
                    <Col lg={6} sm={12} md={6}>
                    <i className="fas fa-award fa-2x"></i>
                        <h5><b>Award-winning support</b></h5>
                        <p>New price? New plan? No problem. We’re here to help, 24/7.</p>
                    </Col>
                </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
                <Row>
                    <Row><img className="w-100 mb-3" src={first} alt="" /></Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="h-100 w-100 mt-2" src={two} alt="" />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                        <img className="h-100 w-100 mt-2" src={three} alt="" />
                        </Col>
                    </Row>
                </Row>
            </Col>
        </Row>
    );
};

export default Choose;
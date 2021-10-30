import React from 'react';
import {Col, Row} from 'react-bootstrap';
import logo from '../../asset/logo.PNG';
import './footer.css'
const Footer = () => {
    return (
        <div className="container-fluid footers"> 
            <Row className="mt-4 mb-3 p-3">
                <Col lg={3} md={4} sm={6}>
                <i className="fas fa-plane-departure fa-4x"></i><h5><b>Start Planning Your Trip</b></h5>
                <p>Georgia Darlow won our Sunday Times.</p>
                </Col>
                <Col lg={3} md={4} sm={6}>
                <i className="fas fa-phone-square-alt fa-4x"></i><h5><b>Ask Our Experts</b></h5>
                <p>+1 666 555 2624</p>
                <p>+44 208 649 2389</p>
                </Col>
                <Col lg={3} md={4} sm={6}>
                <i className="fas fa-map-marker-alt fa-4x"></i><h5><b>Our Location</b></h5>
                <p>3064 Fairmont Avenue Kansas City, MO 64108</p>
                </Col>
                <Col lg={3} md={4} sm={6}>
                <i className="fas fa-envelope fa-4x"></i><h5><b>Subscribe For Updates</b></h5>
                <input type="text" name="" placeholder="Email Address"/>
                </Col>
            </Row>
            <Row className="p-3">
                <Col lg={4} md={6} sm={12}>
                    <img className="rounded me-2" src={logo} alt="" />
                    <small>We’re not like the tour companies you’ll walk past on the high street, or the faceless booking engines you might stumble upon online. We’re here to guide you, to inspire you, to tailor a trip to your precise needs, and to make sure your time away is perfect.</small>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <h4><b>Experiences</b></h4>
                    <p>We Had given tour above 50 country</p>
                    <p>In Future we will increase our connection</p>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <h4><b>Our Company</b></h4>
                    <li>About us</li>
                    <li>Booking Condition</li>
                    <li>Privacy And Policy</li>
                    <li>General Enquiry</li>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;
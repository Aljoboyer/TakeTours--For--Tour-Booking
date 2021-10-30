import React from 'react';
import { Col, FormControl, InputGroup, Row,Button } from 'react-bootstrap';
import Choose from '../Chooseus/Choose';
import Ourblog from '../Ourblog/Ourblog';
import Tourevents from '../Tourevents/Tourevents';
import './Home.css'
const Home = () => {
    return (
        <div className="container-fluid  ">
            <Row className=" justify-content-center homepage   p-4">
                <Col lg={9} md={12} sm={12} className="p-4 mt-4 homerow">
                <h2 className="text-longshadow">
           To travel is to live</h2>
           <h2 className="text-longshadow2 mt-2">
           Trust Our Experience And Travel With us</h2>
           <InputGroup className="mb-3 mt-4 p-2">
    <FormControl
      placeholder="Search Your Destination"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button className="regulerbtn">
      Search
    </Button>
  </InputGroup>
                </Col>
            </Row>
            <Tourevents></Tourevents>
            <Choose></Choose>
            <Ourblog></Ourblog>
        </div>
    );
};

export default Home;
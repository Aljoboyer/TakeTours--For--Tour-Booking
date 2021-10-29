import React from 'react';
import {Container, Nav, Navbar,Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import './header.css';

const Header = () => {
    const {user,LogoutUser} = useAuth();

    const LogoutHandler = () => {
        LogoutUser()
    }
    return ( 
<div className="container-fluid">
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className="p-4">
            <Navbar.Brand className="navss text-dark fs-1 fw-bold"> <span className="span2">Take</span><span>Tours</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavLink className="navss text-primary fs-5 fw-bold ms-3" to="/">Home</NavLink>
                <NavLink className="navss text-dark  ms-3 fw-bold " to="/yourevents">Your Booking</NavLink>
                <NavLink className="navss text-dark ms-3 fw-bold" to="/manageevent">Manage Booking</NavLink>

                </Nav>
                <Nav>
                {
                    user.email ? <Nav><p className="text-primary me-2"><b>{user.displayName}</b></p> <Button onClick={LogoutHandler} className="btn btn-warning text-dark">Log Out</Button></Nav> : <NavLink className="navss logins p-2 text-light fw-bold fs-5 " to="/login">Log-in</NavLink>
                }
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</div>
    );
};

export default Header;
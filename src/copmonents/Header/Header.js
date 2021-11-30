import React from 'react';
import {Container, Nav, Navbar,Button} from 'react-bootstrap';
import {NavLink,useHistory} from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import './header.css';

const Header = () => {
    const {user,LogoutUser,setUser} = useAuth();

    const history = useHistory()
    const LogoutHandler = () => {
        LogoutUser()
        .then(() => {
            setUser({})
            history.push('/')
          }).catch((error) => {
            // An error happened.
          });
    }
    return ( 
<div className="container-fluid">
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className="p-4">
            <Navbar.Brand className="navss text-dark fs-1 fw-bold"> <span className="span2">Take</span><span>Tours</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavLink className="navss text-primary fs-6 fw-bold ms-3" to="/">Home</NavLink>
                {
                    user.email ? <Nav><NavLink className="navss text-primary fs-6  ms-3 fw-bold " to="/yourevents">My Booking</NavLink>
                    </Nav>:  <NavLink className="navss text-primary fs-6 ms-3 fw-bold" to="/">About us</NavLink>
                }
                {
                    user.email === 'admin@gmail.com' && <> <NavLink className="navss text-primary fs-6 ms-3 fw-bold" to="/manageevent">Manage All Booking</NavLink>
                    <NavLink className="navss text-primary fs-6 ms-3 fw-bold" to="/addevent">Add-Tour-Event</NavLink>  </>
                }
               
                </Nav>
                <Nav>
                {
                    user.email ? <Nav><p className="text-dark me-2"><b>{user.displayName}</b></p> <Button onClick={LogoutHandler} className="btn btn-warning text-dark">Log Out <i className="fas fa-sign-out-alt"></i></Button></Nav> : <NavLink className="navss logins p-2 text-light fw-bold fs-5 " to="/login">Log-in <i className="fas fa-sign-in-alt"></i></NavLink>
                }
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</div>
    );
};

export default Header;
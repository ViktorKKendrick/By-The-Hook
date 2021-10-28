import React from 'react'
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

export default function myNav() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className='text-center'>
                <Navbar.Brand as={Link} to='/'>By The Hook</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link activeClassName={'active'} as={Link} to="/">Home</Nav.Link> */}
                        <Nav.Link activeClassName={'active'} as={Link} to="/Login">Login</Nav.Link>
                        <Nav.Link activeClassName={'active'} as={Link} to="/Signup">Signup</Nav.Link>
                        <Nav.Link activeClassName={'active'} as={Link} to="/Signup">    </Nav.Link>
                        
                    </Nav>
                    <Nav.Link activeClassName={'active'} as={Link} to="/Signup"></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

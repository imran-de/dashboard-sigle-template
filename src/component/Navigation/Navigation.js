import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='text-uppercase fw-bolder' href="#home">Dutypedia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto menu">
                        <Nav.Link className='shadow rounded-circle mx-2' href="#home">
                            <i className="fas fa-home"></i>
                        </Nav.Link>
                        <Nav.Link className='shadow rounded-circle mx-2' href="#link">
                            <i className="fas fa-fire"></i>
                        </Nav.Link>
                        <Nav.Link className='shadow rounded-circle mx-2' href="#link">
                            <i className="far fa-bell"></i>
                        </Nav.Link>
                        <Nav.Link className='shadow rounded-circle mx-2' href="#link">
                            <i className="fab fa-telegram-plane"></i>
                        </Nav.Link>
                        <Nav.Link className='shadow mx-2 profile' href="#link"><img className='rounded-circle' src="https://www.thefamouspeople.com/profiles/images/akbar-3.jpg" width='40px' height='40px' alt="" /> <span>Omar Akbar</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
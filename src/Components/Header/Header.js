import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from '../../images/nav-logo.png'


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={img}
              width="50"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Edu-Learning
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
          <Nav className="ms-auto">
           
            <Nav.Link href="#features">Courses</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
     
        </div>
    );
};

export default Header;
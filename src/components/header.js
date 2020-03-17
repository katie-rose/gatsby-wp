import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'gatsby';

export default (props) => (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Gatsby Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link>
        <Link to="/home">Home</Link>
      </Nav.Link>
      <Nav.Link>
      <Link to="/aboutus">About</Link>
      </Nav.Link>
      <Nav.Link>
      <Link to="/contact">Contact</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
)
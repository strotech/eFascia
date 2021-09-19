import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


const AdminNavbar=()=> {
    return (
    <Navbar className="navbar-custom" expand="lg">
      <Container fluid>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            <Nav.Item>
              <Nav.Link                
                href="/"
                onClick={(e) => e.preventDefault()}
                className="m-0"
              >                
                <span className="no-icon">Dashboard</span>
              </Nav.Link>
            </Nav.Item>
            </Nav>
          <Nav className="ml-auto nav-items-custom" navbar>
            
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="/admin/about"
              >
                <span className="no-icon">About</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;

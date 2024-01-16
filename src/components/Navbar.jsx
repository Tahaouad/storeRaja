import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="white" variant="light" expand="lg" sticky="top">
      <div className="container-fluid">
        <Navbar.Brand href="#">
          <img src={require(`../images/logo.png`)} alt="Logo" width={150} />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="mr-auto">
            <Nav.Link href="#" className="fw-bolder text-success mx-2 active">Accueil</Nav.Link>

            <NavDropdown title="Tenues de Match" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Domicile</NavDropdown.Item>
              <NavDropdown.Item href="#">Exterieur</NavDropdown.Item>
              <NavDropdown.Item href="#">Third</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Entrainement" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Training</NavDropdown.Item>
              <NavDropdown.Item href="#">Pre-Match</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Mode" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Polo</NavDropdown.Item>
              <NavDropdown.Item href="#">T-shirt</NavDropdown.Item>
              <NavDropdown.Item href="#">Hoodies</NavDropdown.Item>
              <NavDropdown.Item href="#">Doudoune</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Cadeaux et Accessoires" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Lunettes</NavDropdown.Item>
              <NavDropdown.Item href="#">Casquettes</NavDropdown.Item>
              <NavDropdown.Item href="#">Bobs</NavDropdown.Item>
              <NavDropdown.Item href="#">Mode Cuir</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" className="fw-bolder text-success mx-2">Homme</Nav.Link>
            <Nav.Link href="#" className="fw-bolder text-success mx-2">Femme</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        
      </div>
    </Navbar>
  );
};

export default NavigationBar;

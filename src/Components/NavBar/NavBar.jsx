import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        className='NavBack'
        bg='black'
        variant='dark'
      >
        <div className='contact-info'>
          <p>Federico Luna</p>
          <div>
        <FaWhatsapp color = 'green' fontSize='1.5rem' />
        <a
          href='https://api.whatsapp.com/send?phone=50258056166'
          target='_blank'
          rel='noreferrer'
        >
          +502 5805-6166
        </a>
        </div>
        <div>
        <FaEnvelope color = 'white' fontSize='1.5rem'/>
        <a href='mailto:fluna1973@hotmail.com' target='_blank' rel='noreferrer'>
          Fluna
        </a>
        </div>
      </div>
      <div>
        <Container className='TopBar'>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='auto'>
              <Nav.Link className='links' href='#MainPage'>
                Home
              </Nav.Link>
              <Nav.Link className='links' href='#ThisIsMe'>
                This is me
              </Nav.Link>
              <NavDropdown
                className='links'
                title='Information'
                id='collasible-nav-dropdown'
              >
                <NavDropdown.Item href='#ThisIsMe'>
                  A little bit about me
                </NavDropdown.Item>
                <NavDropdown.Item href='#Projects'>
                  Projects
                </NavDropdown.Item>
                <NavDropdown.Item href='#Testimonials'>
                  Testimonials
                </NavDropdown.Item>
                <NavDropdown.Item href='#Stack'>
                  Stack
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>
                  Skills
                </NavDropdown.Item>
                <NavDropdown.Item href='https://github.com/Flunavgt' target="_blank" rel="noreferrer">
                  GitHub
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.6'>
                  Contact
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;

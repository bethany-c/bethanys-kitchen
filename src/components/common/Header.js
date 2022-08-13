import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

import { headerOptions } from '../../constants/headerOptions';
import '../../App.css';

export const Header = (props) => {
  const {
    setView
  } = props;


  return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='home'>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <NavDropdown title='Recipes' href='recipes' id='collasible-nav-dropdown'>
                { headerOptions.map(option => 
                  <NavDropdown.Item 
                    onClick={ () => setView(option.title) }
                  >
                    { option.title }
                  </NavDropdown.Item>
                )}
              </NavDropdown>
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

Header.propTypes = {
  setView: PropTypes.func.isRequired
};

export default Header;
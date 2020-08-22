import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from './logo';
import '../asset/css/style.css';
class Navigation extends Component {
  render() {
    return (
      <Navbar bg='white' expand='lg'>
        <Nav className='navbar-brand'>
          <Logo />
        </Nav>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav '>
          <Nav className='right'>
            <NavLink className='d-inline p-2 bg-white text-black' to='/'>
              HOME
            </NavLink>
            <NavLink className='d-inline p-2 bg-white text-black' to='/members'>
              MEMBERS
            </NavLink>
            <NavLink
              className='d-inline p-2 bg-white text-black'
              to='/research'
            >
              RESEARCH
            </NavLink>
            <NavLink
              className='d-inline p-2 bg-white text-black'
              to='/publications'
            >
              PUBLICATIONS
            </NavLink>
            <NavLink className='d-inline p-2 bg-white text-black' to='/contact'>
              CONTACT
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

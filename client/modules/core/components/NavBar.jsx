import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const NavBar = ({content}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"> Restaurapp </a>
      </Navbar.Brand>
    </Navbar.Header>

    <Nav>
      <NavItem href="/myfavorites"> My Favorites</NavItem>
      <NavItem href="/register"> Register</NavItem>
      <NavItem href="/login"> Log in</NavItem>
    </Nav>
  </Navbar>
);

export default NavBar;

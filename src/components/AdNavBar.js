import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AdNavBar = () => (
  <>
    <div className="ad-navbar">
      <Navbar bg="primary" variant="dark">
        <NavLink className="navbar-brand" to="/">
          React App
        </NavLink>
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/posts">
            Features
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  </>
);

export default AdNavBar;

import React from 'react';
import { Navbar, Nav, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
// import MainMenuLoader from './loaders/MainMenuLoader';

const AdNavBar = ({ category }) => {
  const handleError = (title, message) => toastr.error(title, message);
  return (
    <>
      <div className="ad-navbar">
        <Navbar bg="primary" variant="dark" fixed="top">
          <NavLink className="navbar-brand" to="/">
            React App
          </NavLink>
          {category.pending ? (
            <Navbar.Brand>
              <Spinner animation="grow" size="sm" />
              <Spinner animation="grow" size="sm" className="ml-5" />
              <Spinner animation="grow" size="sm" className="ml-5" />
            </Navbar.Brand>
          ) : (
            <Nav className="mr-auto">
              {category.categories.map((item, i) => (
                <NavLink key={i} className="nav-link" to="/">
                  {item.title}
                </NavLink>
              ))}
            </Nav>
          )}
          {category.error ? handleError('Category', category.error) : ''}
        </Navbar>
      </div>
    </>
  );
};

AdNavBar.propTypes = {
  category: PropTypes.object.isRequired,
};

export default AdNavBar;

import React from 'react';
import PropTypes from 'prop-types';

const Default = ({ children }) => (
  <>
    <h1>Navbar</h1>
    {children}
    <h1>Footer</h1>
  </>
);

Default.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Default;

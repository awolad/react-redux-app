import React from 'react';
import PropTypes from 'prop-types';

const WithRightSidebar = ({ children }) => (
  <>
    <h1>Navbar</h1>
    <aside>Right Sidebar</aside>
    {children}
    <h1>Footer</h1>
  </>
);

WithRightSidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithRightSidebar;

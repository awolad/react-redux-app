import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdNavBar from '../components/AdNavBar';

class NotFound extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    // const { children } = this.props;
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <div className="not-found-layout">
          <AdNavBar />
          {children}
        </div>
      </>
    );
  }
}

export default NotFound;

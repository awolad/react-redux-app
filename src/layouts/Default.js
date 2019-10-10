import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdNavBar from '../components/AdNavBar';
import AdMainSlider from '../components/AdMainSlider';

// const Default = ({ children }) => (
//   <>
//     <div className="default-layout">
//       <AdNavBar />
//       <AdMainSlider />
//       {children}
//     </div>
//   </>
// );

class Default extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    const { children } = this.props;
    console.log(children);
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <div className="default-layout">
          <AdNavBar />
          <AdMainSlider />
          {children}
        </div>
      </>
    );
  }
}

export default Default;

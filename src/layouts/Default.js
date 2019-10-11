import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AdNavBar from '../components/AdNavBar';
import AdMainSlider from '../components/AdMainSlider';
import { fetchCategories } from '../actions/category';

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
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // const { children } = this.props;
    // console.log(children);
    const { dispatch } = this.props;
    dispatch(fetchCategories());
    // console.log('dispatch()');
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

const mapStateToProps = state => {
  const { posts } = state;

  return {
    posts,
  };
};

export default withRouter(connect(mapStateToProps)(Default));

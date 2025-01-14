import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AdNavBar from '../components/AdNavBar';
import AdFooter from '../components/AdFooter';
import { fetchCategories } from '../actions/category';

class WithRightSidebar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
    category: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  render() {
    const { children, category } = this.props;
    return (
      <>
        <div className="with-right-sidebar">
          <AdNavBar category={category} />
          <aside>Right Sidebar</aside>
          {children}
          <AdFooter />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { category } = state;

  return {
    category,
  };
};

export default withRouter(connect(mapStateToProps)(WithRightSidebar));

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AdNavBar from '../components/AdNavBar';
import { fetchCategories } from '../actions/category';

class NotFound extends Component {
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
        <div className="not-found-layout">
          <AdNavBar category={category} />
          {children}
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

export default withRouter(connect(mapStateToProps)(NotFound));

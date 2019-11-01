import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AdNavBar from '../components/AdNavBar';
import { fetchCategories } from '../actions/category';
import AdFooter from '../components/AdFooter';

class Default extends Component {
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
        <div className="default-layout">
          <AdNavBar category={category} />
          {children}
          <AdFooter />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { category } = state;

  return {
    category,
  };
};

export default withRouter(connect(mapStateToProps)(Default));

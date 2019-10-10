import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Posts from '../components/Posts';

class PostIndex extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const { posts } = this.props;
    // console.log(posts);
  }

  render() {
    const { posts } = this.props;
    return <Posts posts={posts} />;
  }
}

const mapStateToProps = (state) => {
  const { posts } = state;

  return {
    posts,
  };
};

export default withRouter(connect(mapStateToProps)(PostIndex));

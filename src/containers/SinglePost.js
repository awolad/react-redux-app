import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SinglePost extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <div>singless post</div>
        <Link to="/posts">back</Link>
      </>
    );
  }
}

export default SinglePost;

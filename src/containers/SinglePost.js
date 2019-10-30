import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import slugify from 'slugify';
import AdPageHeaderImage from '../components/AdPageHeaderImage';
import AdBreadcrumb from '../components/AdBreadcrumb';
import AdPost from '../components/AdPost';
import AdSimilarPosts from '../components/AdSimilarPosts';
import { fetchPosts, fetchPost } from '../actions/post';

class SinglePost extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.randomTenPost = this.randomTenPost.bind(this);
  }

  async componentDidMount() {
    const { dispatch, match } = this.props;
    await dispatch(fetchPost(match.params.id));
    await dispatch(fetchPosts());
  }

  async componentDidUpdate(prevProps) {
    const { dispatch, match } = this.props;
    if (Number(prevProps.match.params.id) !== Number(match.params.id)) {
      await dispatch(fetchPost(match.params.id));
      await dispatch(fetchPosts());
    }
  }

  randomTenPost() {
    const { post } = this.props;
    if (post.posts) {
      return post.posts.sort(() => Math.random() - Math.random()).slice(0, 10);
    }
    return [];
  }

  render() {
    const { post } = this.props;
    const breadcrumbItems = [
      { url: '/', text: 'Home', active: false },
      { url: '/posts', text: 'Posts', active: false },
      {
        url: post.post ? `/${post.post.id}/${post.post.title}` : '',
        text: post.post ? slugify(post.post.title) : '',
        active: true,
      },
    ];
    return (
      <>
        <AdPageHeaderImage />
        <Container>
          <Row>
            <Col md={12}>
              <AdBreadcrumb data={breadcrumbItems} />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <AdPost data={post} />
            </Col>
            <Col md={4}>
              <AdSimilarPosts data={this.randomTenPost()} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { post } = state;

  return {
    post,
  };
};

export default withRouter(connect(mapStateToProps)(SinglePost));

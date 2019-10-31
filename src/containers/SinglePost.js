import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import AdPageHeaderImage from '../components/AdPageHeaderImage';
import AdBreadcrumb from '../components/AdBreadcrumb';
import AdPost from '../components/AdPost';
import AdSimilarPosts from '../components/AdSimilarPosts';
import AdAuthorPosts from '../components/AdAuthorPosts';
import AdAuthorInfo from '../components/AdAuthorInfo';
import { fetchPosts, fetchPost } from '../actions/post';
import { fetchAuthor } from '../actions/author';

class SinglePost extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.getPost = this.getPost.bind(this);
    this.getRandomTenPost = this.getRandomTenPost.bind(this);
  }

  async componentDidMount() {
    const { dispatch, match } = this.props;
    await dispatch(fetchPost(match.params.id));
    await dispatch(fetchPosts());
    await dispatch(fetchAuthor(this.getPost().userId));
  }

  async componentDidUpdate(prevProps) {
    const { dispatch, match } = this.props;
    if (Number(prevProps.match.params.id) !== Number(match.params.id)) {
      await dispatch(fetchPost(match.params.id));
      await dispatch(fetchPosts());
      await dispatch(fetchAuthor(this.getPost().userId));
    }
  }

  getPost() {
    const { post } = this.props;
    if (post.post) {
      return post.post;
    }
    return null;
  }

  getRandomTenPost() {
    const { post } = this.props;
    if (post.posts) {
      return post.posts.sort(() => Math.random() - Math.random()).slice(0, 10);
    }
    return [];
  }

  getAuthorPosts() {
    const { post } = this.props;
    if (post.posts && post.post) {
      return post.posts.filter(
        (postItem) => postItem.userId === post.post.userId,
      );
    }
    return [];
  }

  render() {
    const { post, author } = this.props;
    const breadcrumbItems = [
      { url: '/', text: 'Home', active: false },
      { url: '/posts', text: 'Posts', active: false },
      {
        url: post.post ? `/${post.post.id}/${post.post.title}` : '',
        text: post.post ? post.post.title : '',
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
              <AdSimilarPosts data={this.getRandomTenPost()} />
              <AdAuthorInfo data={author} />
              <AdAuthorPosts data={this.getAuthorPosts()} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { post, author } = state;

  return {
    post,
    author,
  };
};

export default withRouter(connect(mapStateToProps)(SinglePost));

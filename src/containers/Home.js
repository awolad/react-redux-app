import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import AdTopThreePosts from '../components/AdTopThreePosts';
import AdLatestPosts from '../components/AdLatestPosts';
import AdFeaturedPostCarousel from '../components/AdFeaturedPostCarousel';
import AdHomePosts from '../components/AdHomePosts';
import { fetchPosts } from '../actions/post';

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.getRandomThreePosts = this.getRandomThreePosts.bind(this);
    this.getRandomFivePosts = this.getRandomFivePosts.bind(this);
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(fetchPosts());
  }

  getRandomThreePosts() {
    const { post } = this.props;
    if (post.posts) {
      return post.posts.sort(() => Math.random() - Math.random()).slice(0, 3);
    }
    return [];
  }

  getRandomFivePosts() {
    const { post } = this.props;
    if (post.posts) {
      return post.posts.sort(() => Math.random() - Math.random()).slice(0, 5);
    }
    return [];
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={12}>
              <AdTopThreePosts data={this.getRandomThreePosts()} />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <AdLatestPosts />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <AdFeaturedPostCarousel />
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12}>
              <AdHomePosts />
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

export default withRouter(connect(mapStateToProps)(Home));

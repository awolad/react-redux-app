import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import AdPosts from '../components/AdPosts';
import AdPageHeaderImage from '../components/AdPageHeaderImage';
import AdBreadcrumb from '../components/AdBreadcrumb';
import { fetchPosts } from '../actions/post';

class CategoryPostIndex extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.getRandomFiftyPosts = this.getRandomFiftyPosts.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts());
  }

  getRandomFiftyPosts() {
    const { post } = this.props;
    if (post.posts) {
      return post.posts.sort(() => Math.random() - Math.random()).slice(0, 50);
    }
    return [];
  }

  render() {
    const { match } = this.props;
    const breadcrumbItems = [
      { url: '/', text: 'Home', active: false },
      { url: '/categories', text: 'Categories', active: false },
      {
        url: `/categories/${match.params.id}`,
        text: match.params.id,
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
              <AdPosts data={this.getRandomFiftyPosts()} />
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

export default withRouter(connect(mapStateToProps)(CategoryPostIndex));

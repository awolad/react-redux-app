import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
 Container, Row, Col, Card, Button 
} from 'react-bootstrap';
import AdPageHeaderImage from '../components/AdPageHeaderImage';
import AdBreadcrumb from '../components/AdBreadcrumb';
import { fetchPosts, fetchPost } from '../actions/post';

class SinglePost extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
  };

  async componentDidMount() {
    const { dispatch, post } = this.props;
    await dispatch(fetchPost(1));
    await dispatch(fetchPosts());
    console.log(post);
  }

  render() {
    const breadcrumbItems = [
      { url: '/', text: 'Home', active: false },
      { url: '/posts', text: 'Posts', active: false },
      { url: '/22/post-title', text: 'post-title', active: true },
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
              <Card>
                <Card.Img
                  variant="top"
                  src={`${process.env.REACT_APP_PHOTO_API}/10/800/350`}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Similar Posts</Card.Title>
                  <Link className="card-link" to="/">
                    lorem sdfoi s fdsijfolij osdif sdfsdf sdf dfg...
                  </Link>
                </Card.Body>
              </Card>
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

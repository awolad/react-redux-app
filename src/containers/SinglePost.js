import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import AdPageHeaderImage from '../components/AdPageHeaderImage';
import AdBreadcrumb from '../components/AdBreadcrumb';

class SinglePost extends Component {
  componentDidMount() {}

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
        </Container>
        <Link to="/posts">back</Link>
      </>
    );
  }
}

export default SinglePost;

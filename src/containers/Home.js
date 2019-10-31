import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import AdTopThreePosts from '../components/AdTopThreePosts';
import AdLatestPosts from '../components/AdLatestPosts';
import AdFeaturedPostCarousel from '../components/AdFeaturedPostCarousel';
import AdHomePosts from '../components/AdHomePosts';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={12}>
              <AdTopThreePosts />
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

export default Home;

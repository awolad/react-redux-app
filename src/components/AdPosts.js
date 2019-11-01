import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
 Container, Row, Col, Card, Button 
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

// const AdPosts = ({ data }) => ;
class AdPosts extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: 8,
    };

    this.loadMore = this.loadMore.bind(this);
  }

  formattedTitle = (title) => `${title.substring(0, 15)}...`;

  formattedBody = (body) => `${body.substring(0, 45)}...`;

  loadMore() {
    this.setState((prev) => ({ visible: prev.visible + 4 }));
  }

  render() {
    const { data } = this.props;
    const { visible } = this.state;
    return (
      <>
        <Container>
          <Row>
            {data.slice(0, visible).map((post, i) => (
              <Col md={3} key={i}>
                <Card className="text-center mb-4">
                  <Card.Img
                    variant="top"
                    src={`${process.env.REACT_APP_PHOTO_API}/${post.id}/100/80`}
                  />
                  <Card.Body>
                    <Card.Title>{this.formattedTitle(post.title)}</Card.Title>
                    <Card.Text>{this.formattedBody(post.body)}</Card.Text>
                    <Link
                      to={`/${post.id}/${slugify(post.title)}`}
                      className="btn btn-primary btn-block"
                    >
                      View
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            <Col md={12} className="mb-5">
              <Button onClick={this.loadMore} variant="info" size="lg" block>
                Load More
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AdPosts;

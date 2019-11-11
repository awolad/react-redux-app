import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/AdLatestPosts.css';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { strSlice, unSplashImage } from '../helpers';

const AdLatestPosts = ({ data }) => (
  <>
    <div className="mt-5">
      <Row className="mb-2">
        <Col md={6}>
          <h3 className="text-info">Latest Posts</h3>
        </Col>
        <Col md={6}>
          <Link to="/posts" className="float-right btn btn-outline-info">
            View More &#8594;
          </Link>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          {data
            ? data.slice(0, 1).map((post, index) => (
              <Link
                key={index}
                className="card-post-link"
                to={`/${post.id}/${slugify(post.title)}`}
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src={unSplashImage(post.id, 500, 420)}
                  />
                  <Card.Body>
                    <Card.Title>
                      {`${strSlice(post.title, 0, 45)}...`}
                    </Card.Title>
                    <Card.Text>
                      {`${strSlice(post.body, 0, 130)}...`}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            ))
            : ''}
        </Col>
        <Col md={6}>
          <Row>
            {data
              ? data.slice(1, 5).map((post, index) => (
                <Col key={index} md={6} className="mb-4">
                  <Link
                    className="card-post-link"
                    to={`/${post.id}/${slugify(post.title)}`}
                  >
                    <Card>
                      <Card.Img
                        variant="top"
                        src={unSplashImage(post.id, 250, 150)}
                      />
                      <Card.Body>
                        <Card.Title>
                          {`${strSlice(post.title, 0, 15)}...`}
                        </Card.Title>
                        <Card.Text>
                          {`${strSlice(post.body, 0, 40)}...`}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))
              : ''}
          </Row>
        </Col>
      </Row>
    </div>
  </>
);

AdLatestPosts.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AdLatestPosts;

import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { strSlice } from '../helpers';

const AdTopThreePosts = ({ data }) => (
  <>
    <div className="mt-5 ad-top-three-posts">
      <Row>
        {data
          ? data.map((post, index) => (
            <Col md={4} key={index}>
              <Link
                className="card-post-link"
                to={`/${post.id}/${slugify(post.title)}`}
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src={`${process.env.REACT_APP_PHOTO_API}/${post.id}/500/420`}
                  />
                  <Card.Body>
                    <Card.Title>
                      {`${strSlice(post.title, 0, 25)}...`}
                    </Card.Title>
                    <Card.Text>
                      {`${strSlice(post.body, 0, 70)}...`}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
          : ''}
      </Row>
    </div>
  </>
);

AdTopThreePosts.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AdTopThreePosts;

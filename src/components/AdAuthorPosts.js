import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { strSlice } from '../helpers';

const AdAuthorPosts = ({ data }) => (
  <div className="ad-author-posts">
    <Card>
      <Card.Header>More From This Author</Card.Header>
      <Card.Body>
        {data
          ? data.map((post, index) => (
            <Link
              key={index}
              className="card-link"
              to={`/${post.id}/${slugify(post.title)}`}
              style={{
                display: 'inline-block',
                margin: '0',
                padding: '3px 0',
              }}
            >
              {`${strSlice(post.title, 0, 35)}...`}
            </Link>
          ))
          : ''}
      </Card.Body>
    </Card>
  </div>
);

AdAuthorPosts.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AdAuthorPosts;

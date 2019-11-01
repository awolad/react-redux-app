import React from 'react';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { strSlice } from '../helpers';
import './css/AdFeaturedPostCarousel.css';

const AdFeaturedPostCarousel = ({ data }) => (
  <>
    <Carousel>
      {data
        ? data.map((post, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={`${process.env.REACT_APP_PHOTO_API}/${post.id}/2000/300?text=Second slide&bg=282c34`}
              alt={post.title}
            />
            <Carousel.Caption>
              <h3>
                <Link
                  key={index}
                  className="card-post-link"
                  to={`/${post.id}/${slugify(post.title)}`}
                >
                  {`${strSlice(post.title, 0, 50)}`}
                </Link>
              </h3>
              <p>{`${strSlice(post.body, 0, 200)}...`}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
        : ''}
    </Carousel>
  </>
);

AdFeaturedPostCarousel.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AdFeaturedPostCarousel;

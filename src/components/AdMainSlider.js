import React from 'react';
import { Carousel } from 'react-bootstrap';
import slugify from 'slugify';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { strSlice } from '../helpers';

const AdMainSlider = ({ data }) => (
  <>
    <div className="ad-main-slider">
      <Carousel>
        {data
          ? data.map((post, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_PHOTO_API}/${post.id}/1920/700`}
                alt={post.title}
              />
              <Carousel.Caption>
                <h3>
                  <Link
                    className="card-post-link"
                    to={`/${post.id}/${slugify(post.title)}`}
                  >
                    {`${strSlice(post.title, 0, 50)}`}
                  </Link>
                </h3>
                <p>{strSlice(post.body, 0, 200)}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
          : ''}
      </Carousel>
    </div>
  </>
);

AdMainSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AdMainSlider;

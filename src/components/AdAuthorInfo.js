import React from 'react';
import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import slugify from 'slugify';
// import { strSlice } from '../helpers';

const AdAuthorInfo = ({ data }) => (
  <div className="ad-author-info mb-3">
    <Card>
      <Card.Header>About Author</Card.Header>
      <Card.Body>
        {data.author ? (
          <>
            <Card.Title>
              <strong>{data.author.name}</strong>
            </Card.Title>
            <Card.Text>
              <span>{`Email: ${data.author.email}`}</span>
              <br />
              <span>{`Phone: ${data.author.phone}`}</span>
              <br />
              <span>{`Website: ${data.author.website}`}</span>
            </Card.Text>
            <Card.Text>
              <span>
                <strong>
                  <em>Company</em>
                </strong>
              </span>
              <br />
              <span>{data.author.company.name}</span>
              <br />
              <span>{data.author.company.catchPhrase}</span>
              <br />
              <span>{data.author.company.bs}</span>
            </Card.Text>
            <Card.Text>
              <span>
                <strong>
                  <em>Address</em>
                </strong>
              </span>
              <br />
              <span className="pr-1">{`${data.author.address.street},`}</span>
              <span>{data.author.address.suite}</span>
              <br />
              <span className="pr-1">{`${data.author.address.city},`}</span>
              <span>{data.author.address.zipcode}</span>
              <br />
              <span>{`Lat: ${data.author.address.geo.lat}`}</span>
              <br />
              <span>{`Lng: ${data.author.address.geo.lng}`}</span>
            </Card.Text>
          </>
        ) : (
          ''
        )}
      </Card.Body>
    </Card>
  </div>
);

AdAuthorInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AdAuthorInfo;

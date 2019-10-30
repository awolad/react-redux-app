import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AdPost = ({ data }) => (
  <div className="ad-post">
    <Card>
      <Card.Img
        variant="top"
        src={`${process.env.REACT_APP_PHOTO_API}/${
          data.post ? data.post.id : 10
        }/800/350`}
      />
      <Card.Body>
        <Card.Title>{data.post ? data.post.title : ''}</Card.Title>
        <Card.Text>{data.post ? data.post.body : ''}</Card.Text>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tortor
          pretium viverra suspendisse potenti nullam ac tortor vitae. Netus et
          malesuada fames ac turpis egestas sed tempus. Mollis aliquam ut
          porttitor leo a diam. Ullamcorper a lacus vestibulum sed arcu non
          odio. Imperdiet sed euismod nisi porta lorem mollis aliquam ut
          porttitor. Nulla pharetra diam sit amet nisl suscipit adipiscing.
          Neque viverra justo nec ultrices dui. Imperdiet proin fermentum leo
          vel orci porta. Id aliquet risus feugiat in ante metus dictum. Enim
          sit amet venenatis urna cursus. Dictumst quisque sagittis purus sit.
          Tempor orci eu lobortis elementum nibh tellus molestie. Vivamus at
          augue eget arcu dictum varius. Gravida cum sociis natoque penatibus et
          magnis. Quam quisque id diam vel quam elementum. Aliquet bibendum enim
          facilisis gravida.
        </Card.Text>
        <Card.Text>
          Nisl purus in mollis nunc sed id. Potenti nullam ac tortor vitae purus
          faucibus ornare suspendisse. Sit amet est placerat in egestas erat
          imperdiet. Risus viverra adipiscing at in tellus integer feugiat.
          aliquet.
        </Card.Text>
        <Card.Text>
          Commodo sed egestas egestas fringilla phasellus faucibus scelerisque
          eleifend donec. Faucibus purus in massa tempor nec feugiat nisl
          pretium fusce. Sit amet est placerat in. Mauris augue neque gravida in
          fermentum et sollicitudin ac orci. Magnis dis parturient montes
          nascetur ridiculus mus mauris. Viverra aliquet eget sit amet tellus
          cras adipiscing enim eu. Eu tincidunt tortor aliquam nulla facilisi
          cras. Mauris nunc congue nisi vitae.
        </Card.Text>
        <Link className="btn btn-primary" to="/posts">
          All Posts
        </Link>
      </Card.Body>
    </Card>
  </div>
);

AdPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AdPost;

import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { unSplashImage } from '../helpers';

const AdPost = ({ data }) => (
  <div className="ad-post">
    <Card>
      <Card.Img
        variant="top"
        src={unSplashImage(data.post ? data.post.id : 10, 250, 150)}
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
          aliquet. Neque volutpat ac tincidunt vitae. Non tellus orci ac auctor
          augue mauris augue. Neque aliquam vestibulum morbi blandit cursus.
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
        <Card.Text>
          Odio eu feugiat pretium nibh ipsum consequat nisl. Eu mi bibendum
          neque egestas congue quisque egestas diam. Donec pretium vulputate
          sapien nec sagittis aliquam malesuada bibendum arcu. Et egestas quis
          ipsum suspendisse ultrices gravida dictum. Quis ipsum suspendisse
          ultrices gravida dictum fusce ut placerat orci. Erat velit scelerisque
          in dictum non consectetur a erat. Sagittis purus sit amet volutpat
          consequat mauris nunc. Ac odio tempor orci dapibus. Eget velit aliquet
          sagittis id consectetur. Lorem ipsum dolor sit amet consectetur
          adipiscing. Tortor vitae purus faucibus ornare suspendisse. Aenean
          euismod elementum nisi quis eleifend quam adipiscing vitae. Vitae
          elementum curabitur vitae nunc. In massa tempor nec feugiat nisl
          pretium fusce id velit. Varius sit amet mattis vulputate enim nulla.
          Turpis tincidunt id aliquet risus feugiat.
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

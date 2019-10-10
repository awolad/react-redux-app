import React from 'react';
import { Link } from 'react-router-dom';
import {
 Container, Row, Col, Jumbotron 
} from 'react-bootstrap';

const AdNotFound = () => (
  <Container className="text-center">
    <Row className="mt-5">
      <Col md="12">
        <Jumbotron>
          <h1 className="text-danger">Not Found!</h1>
          <p>The page you are looking for that is not found.</p>
          <p>
            <Link to="/" className="btn btn-lg btn-info">
              Home
            </Link>
          </p>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default AdNotFound;

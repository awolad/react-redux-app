import React from 'react';
import {
 Card, Row, Col, Button 
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/AdLatestPosts.css';

const AdLatestPosts = () => (
  <>
    <div className="mt-5">
      <Row className="mb-2">
        <Col md={6}>
          <h3 className="text-info">Latest Posts</h3>
        </Col>
        <Col md={6}>
          <Button className="float-right" variant="outline-info">
            View More &#8594;
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Link className="card-post-link" to="/">
            <Card>
              <Card.Img
                variant="top"
                src={`${process.env.REACT_APP_PHOTO_API}/${10}/500/420`}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. build on the card tit build on
                  the card tit
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={6}>
              <Link className="card-post-link" to="/">
                <Card>
                  <Card.Img
                    variant="top"
                    src={`${process.env.REACT_APP_PHOTO_API}/${10}/250/150`}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src={`${process.env.REACT_APP_PHOTO_API}/${10}/250/150`}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src={`${process.env.REACT_APP_PHOTO_API}/${10}/250/150`}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`${process.env.REACT_APP_PHOTO_API}/${10}/250/150`}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </>
);

export default AdLatestPosts;

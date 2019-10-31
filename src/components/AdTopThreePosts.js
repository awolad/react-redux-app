import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';

const AdTopThreePosts = () => (
  <>
    <CardDeck className="mt-5">
      <Card>
        <Card.Img
          variant="top"
          src={`${process.env.REACT_APP_PHOTO_API}/${10}/100/75`}
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted By: Jakir Hossain</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src={`${process.env.REACT_APP_PHOTO_API}/${11}/100/75`}
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted By: Awolad Hossain</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src={`${process.env.REACT_APP_PHOTO_API}/${12}/100/75`}
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted By: Salman Farshy</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  </>
);

export default AdTopThreePosts;

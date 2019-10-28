import React from 'react';
import { Image } from 'react-bootstrap';

const AdPageHeaderImage = () => (
  <>
    <Image src={`${process.env.REACT_APP_PHOTO_API}/10/1920/300`} fluid />
  </>
);

export default AdPageHeaderImage;

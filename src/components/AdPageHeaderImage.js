import React from 'react';
import { Image } from 'react-bootstrap';
import { unSplashImage } from '../helpers';

const AdPageHeaderImage = () => (
  <>
    <Image src={unSplashImage(10, 1920, 300)} fluid />
  </>
);

export default AdPageHeaderImage;

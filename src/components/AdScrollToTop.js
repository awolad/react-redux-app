import React from 'react';

import ScrollToTop from 'react-scroll-up';
import { Image } from 'react-bootstrap';

const AdScrollToTop = () => (
  <>
    <ScrollToTop showUnder={0} duration={400}>
      <Image src="/images/up_arrow_round.png" rounded />
    </ScrollToTop>
  </>
);

export default AdScrollToTop;

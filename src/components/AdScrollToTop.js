import React from 'react';

import ScrollToTop from 'react-scroll-up';
import { Image } from 'react-bootstrap';

const AdScrollToTop = () => (
  <>
    <ScrollToTop showUnder={0} duration={400} style={{ right: '10px' }}>
      <Image
        src="/images/up_arrow_round.png"
        rounded
        style={{ width: '35px', height: '35px' }}
      />
    </ScrollToTop>
  </>
);

export default AdScrollToTop;

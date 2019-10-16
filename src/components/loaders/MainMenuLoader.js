import React from 'react';
import ContentLoader from 'react-content-loader';

const MainMenuLoader = (props) => (
  <ContentLoader
    height={50}
    width={400}
    speed={1}
    primaryColor="#99caff"
    secondaryColor="#007bff"
    {...props}
  >
    <rect height="5.5" rx="1" ry="1" width="340" x="31" y="2" />
    <rect height="5.5" rx="1" ry="1" width="340" x="31" y="8" />
    {/* <circle cx="388" cy="12" r="12" /> */}
    {/* <rect height="24" rx="0" ry="0" width="24" x="0" y="0" /> */}
  </ContentLoader>
);

export default MainMenuLoader;

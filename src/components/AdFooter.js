import React from 'react';
import './css/AdFooter.css';
import AdScrollToTop from './AdScrollToTop';

const AdFooter = () => (
  <>
    <footer className="blog-footer">
      <p>A React Redux Boilarplate template.</p>
      <p>
        Developed by
        <a
          className="ml-1"
          href="http://awolad.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Awolad
        </a>
      </p>
    </footer>
    <AdScrollToTop />
  </>
);

export default AdFooter;

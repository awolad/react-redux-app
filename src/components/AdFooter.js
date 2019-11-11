import React from 'react';
import './css/AdFooter.css';
import AdScrollToTop from './AdScrollToTop';

const AdFooter = () => (
  <>
    <footer className="blog-footer">
      <p>A React Redux Demo Application.</p>
      <p>
        <em>
          Developed By
          <a
            className="ml-1"
            href="http://awolad.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Awolad
          </a>
        </em>
      </p>
    </footer>
    <AdScrollToTop />
  </>
);

export default AdFooter;

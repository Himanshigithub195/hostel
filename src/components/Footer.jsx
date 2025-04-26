import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <p>
          © {currentYear} Sri Satya Sai University of Technology and Medical Sciences, Sehore. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

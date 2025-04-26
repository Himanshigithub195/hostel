import React from 'react';



function Header() {
  return (
    <header className="hero" role="banner">
      <div className="hero-content container">
        <h1>Sri Satya Sai University Hostels</h1>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a href="https://www.sssutms.ac.in" target="_blank" rel="noopener noreferrer">Home</a> 
          <a href="#campus-life">Campus Life</a> 
          <span>Hostels</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
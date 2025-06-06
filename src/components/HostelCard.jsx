import React from 'react';

function HostelCard({ imgSrc, imgAlt, title, description }) {
  return (
    <div className="hostel-card">
      <img src={imgSrc} alt={imgAlt} loading="lazy" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default HostelCard;

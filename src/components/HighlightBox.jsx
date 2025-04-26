import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HighlightBox({ icon, title, children }) {
  return (
    <div className="highlight-box">
      {icon && <FontAwesomeIcon icon={icon} aria-hidden="true" size="2x" />}
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default HighlightBox;

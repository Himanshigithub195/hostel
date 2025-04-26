import React, { useEffect, useCallback } from 'react';

function Lightbox({ src, alt, onClose }) {
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!src) {
    return null;
  }

  return (
    <div className="lightbox" onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-label={alt || "Image Lightbox"}>
      <div className="lightbox-content">
         <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">×</button>
         <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default Lightbox;

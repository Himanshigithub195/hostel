import React from 'react';

const galleryImages = [
  { id: 'g1', src: "https://www.fivdbctc.net/photogallerysunam/images/work_9.jpg", alt: "Clean and modern hostel room" },
  
  { id: 'g3', src: "https://www.fivdbctc.net/photogallerysunam/images/work_6.jpg", alt: "Hostel common room with seating and TV" },
  { id: 'g4', src: "https://www.sssutms.ac.in/static/media/img-31.0c9906e928f152e64923.jpg", alt: "Modern hostel building exterior" },
];

function Gallery({ onImageClick }) {
  return (
    <section className="gallery section-padding alt-bg" aria-labelledby="gallery-heading">
      <div className="container">
        <h2 id="gallery-heading" className="section-title">Glimpses of Hostel Life</h2>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              onClick={() => onImageClick(image.src, image.alt)}
              style={{ cursor: 'pointer' }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;

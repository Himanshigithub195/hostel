import React, { useState } from 'react';

// Import Components - Ensure these paths and extensions are EXACTLY correct
import Header from './components/Header.jsx';
import Introduction from './components/Introduction.jsx';
import Gallery from './components/Gallery.jsx';
import BoysHostels from './components/BoysHostels.jsx';
import GirlsHostels from './components/GirlsHostels.jsx';
import Dining from './components/Dining.jsx';
import Facilities from './components/Facilities.jsx';
import StudentFocus from './components/StudentFocus.jsx';
import Footer from './components/Footer.jsx';
import Lightbox from './components/Lightbox.jsx';

// Import Font Awesome CSS if not using React components (less ideal)
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Alternative, if needed

function App() {
  const [lightboxImageSrc, setLightboxImageSrc] = useState('');
  const [lightboxImageAlt, setLightboxImageAlt] = useState('');

  const openLightbox = (src, alt) => {
    setLightboxImageSrc(src);
    setLightboxImageAlt(alt || 'Hostel gallery image');
  };

  const closeLightbox = () => {
    setLightboxImageSrc('');
    setLightboxImageAlt('');
  };

  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Gallery onImageClick={openLightbox} />
        <BoysHostels />
        <GirlsHostels />
        <Dining />
        <Facilities />
        <StudentFocus />
      </main>
      <Footer />
      <Lightbox
        src={lightboxImageSrc}
        alt={lightboxImageAlt}
        onClose={closeLightbox}
      />
    </>
  );
}

export default App;
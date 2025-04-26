import React from 'react';

function Dining() {
  return (
    <section className="dining container section-padding" aria-labelledby="dining-heading">
      <h2 id="dining-heading" className="section-title">Dining Experience</h2>
      <div className="dining-content">
        <div className="dining-text">
          <p>
            Our dining halls serve healthy, hygienic, and diverse meals, catering
            to vegetarian and non-vegetarian preferences. With flexible meal plans,
            night canteens, and special dietary options, we prioritize nutrition
            and inclusivity. The spacious dining areas double as social hubs,
            fostering connections among students.
          </p>
        </div>
        <div className="dining-image">
          <img src="https://www.fivdbctc.net/photogallerysunam/images/dining_1.jpg" alt="Students eating together in the university dining hall" loading="lazy"/>
        </div>
      </div>
    </section>
  );
}

export default Dining;

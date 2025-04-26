import React from 'react';

function StudentFocus() {
  return (
    <section className="student-focus container section-padding" aria-labelledby="student-focus-heading">
      <h2 id="student-focus-heading" className="section-title">Student Voice & Well-being</h2>
      <div className="focus-content">
        <div className="review-committee">
          <h3>Hostel Review Committee</h3>
          <p>
            Bi-weekly meetings with student representatives ensure open
            communication, addressing concerns and improving hostel life.
          </p>
        </div>
        <div className="satisfaction-rating">
          <h3>Student Satisfaction</h3>
          <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
          <p>Highly rated for quality of life, safety, and supportive staff.</p>
        </div>
      </div>
    </section>
  );
}

export default StudentFocus;

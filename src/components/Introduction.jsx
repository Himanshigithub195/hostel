import React from 'react';
import { faUsers, faComments, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import HighlightBox from './HighlightBox.jsx'; // Ensure .jsx extension

function Introduction() {
  return (
    <section className="intro container section-padding" aria-labelledby="intro-heading">
      <h2 id="intro-heading">Welcome to Your Home Away From Home</h2>
      <p>
        At Sri Satya Sai University, our hostels are designed to provide a safe,
        inclusive, and vibrant living environment. More than just accommodation,
        they foster lasting friendships and a strong sense of community,
        supporting both academic success and personal growth.
      </p>
      <div className="intro-highlights">
        <HighlightBox icon={faUsers} title="Diverse Community">
          Connect with students from various backgrounds and cultures.
        </HighlightBox>
        <HighlightBox icon={faComments} title="Skill Development">
          Enhance communication, leadership, and teamwork skills.
        </HighlightBox>
        <HighlightBox icon={faCalendarAlt} title="Campus Engagement">
          Participate in clubs, events, and activities with ease.
        </HighlightBox>
      </div>
    </section>
  );
}

export default Introduction;

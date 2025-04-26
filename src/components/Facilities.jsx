import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed, faDumbbell, faBasketball, faWifi, faBookOpen, faUsers,
  faScissors, faFirstAid, faShirt, faShieldAlt, faStore, faBolt
} from '@fortawesome/free-solid-svg-icons';

const facilitiesList = [
    { id: 'f1', icon: faBed, text: 'Spacious AC & Non-AC Rooms' },
    { id: 'f2', icon: faDumbbell, text: 'In-house Gymnasium' },
    { id: 'f3', icon: faBasketball, text: 'Sports Facilities' },
    { id: 'f4', icon: faWifi, text: '24/7 High-Speed Wi-Fi' },
    { id: 'f5', icon: faBookOpen, text: 'Reading Rooms & Study Halls' },
    { id: 'f6', icon: faUsers, text: 'Visitor Halls & Common Rooms' },
    { id: 'f7', icon: faScissors, text: 'On-campus Salon Services' },
    { id: 'f8', icon: faFirstAid, text: '24/7 Medical Support' },
    { id: 'f9', icon: faShirt, text: 'Laundry & Housekeeping' },
    { id: 'f10', icon: faShieldAlt, text: 'Round-the-Clock Security' },
    { id: 'f11', icon: faStore, text: 'Convenience Store' },
    { id: 'f12', icon: faBolt, text: 'Power Backup' },
];

function Facilities() {
  return (
    <section className="facilities container section-padding alt-bg" aria-labelledby="facilities-heading">
      <h2 id="facilities-heading" className="section-title">Hostel Facilities</h2>
      <ul className="facilities-list">
        {facilitiesList.map(facility => (
          <li key={facility.id}>
            <FontAwesomeIcon icon={facility.icon} aria-hidden="true" fixedWidth />
            <span style={{ marginLeft: '8px' }}>{facility.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Facilities;

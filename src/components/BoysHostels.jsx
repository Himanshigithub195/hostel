import React from 'react';
import HostelCard from './HostelCard.jsx'; // Ensure .jsx extension

const boysHostelsData = [
  {
    id: 'bh1',
    imgSrc: "https://media-hosting.imagekit.io/8ecccead7c35490d/ChatGPT%20Image%20Apr%2021,%202025,%2012_05_52%20PM.png?Expires=1839825770&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=M8efxrzh2pOZ7a9BjsHJlC0eqyYBFUALEpCgWw9lvUiUFd7YMaLdizovDt46QbVAYlUjjno7NmLqDoJnvpMapLQBt7fmWUE3gCHCoQKzD8NkWuXU1sB4nyrNrxwg-qNzFWzTftFVp6nlAEim4x7w9-4BvyswCPv53PCugSm599-PqnIbMzp6hqfcGTRTwgg1xnr4ZEA8NzbwOVy1a67XStZc9FnL-EcnOaKAhDyJSBSwKVkRbxyCnZ9waamfpPnSFftnD8EaVRKyKTUo5iX0mb2xnmGQ0WWlrDq9A9XvM2N1kFrvPohl4POVKI91vKXY-a1dhbiLYch94WAttNhJWg__",
    imgAlt: "Modern boys hostel room",
    title: "Modern Facilities",
    description: "Spacious rooms with sports courts, tech-enabled study zones, and modern amenities."
  },
  {
    id: 'bh2',
    imgSrc: "https://media-hosting.imagekit.io/8c4eb575679c4efe/ChatGPT%20Image%20Apr%2026,%202025,%2002_01_46%20PM.png?Expires=1840264620&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=flIivu4p3vI8KI8W50FG41ZHAlxU~YsNI5bP5ALKySV5Sr9AuNkC9-YVtMWtcA2AF4uLpBSetda-g2~KC3uFO88iw-dGV15X4yu92B-BAHfVDADMiyG5on6A8yd1au-C5M5t-D2J8hgr0OXqtXlFDxFukAvaTDMMCYpAyCNPdv1mk6GVKDgfFQC58~AYN0KuR8YfRlfNfp~64cxKotvrM7yTcdQ5PtK~L44bxexyPfZ~5zXuIxybPBpeZVpSQOv8D5MOyZSw4y5cH3wtnaKbq~u0G~KWLnwBlsNH~N5XLLranGFurpJqm5ooeinLcRl5DxBtzp44163YkfgPKhGI6A__",
    imgAlt: "Boys hostel leisure area",
    title: "Leisure & Academic Zones",
    description: "Comfortable spaces for relaxation and study, with weekly mentoring sessions."
  }
];

function BoysHostels() {
  return (
    <section id="boys-hostels" className="hostels-section container section-padding" aria-labelledby="boys-hostels-heading">
      <h2 id="boys-hostels-heading" className="section-title">Boys Hostels</h2>
      <div className="hostel-grid">
        {boysHostelsData.map(hostel => (
          <HostelCard
            key={hostel.id}
            imgSrc={hostel.imgSrc}
            imgAlt={hostel.imgAlt}
            title={hostel.title}
            description={hostel.description}
          />
        ))}
      </div>
    </section>
  );
}

export default BoysHostels;

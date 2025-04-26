import React from 'react';
import HostelCard from './HostelCard.jsx'; // Ensure .jsx extension

const girlsHostelsData = [
  {
    id: 'gh1',
    imgSrc: "https://media-hosting.imagekit.io/1fe868e9265b4b9b/ChatGPT%20Image%20Apr%2021,%202025,%2011_51_57%20AM.png?Expires=1839825400&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YBiw2eFgzUwcLwIj-aNrGhyZJqggN~eXRrz17MstulGyCdIIplmfvj18tuvhi~SjfJD-l3n~AIFeX9-LRQvawMMJVW-L9r4t5grZHesObkgm7wLNou9ECvMY1zaUGCE3nwniP48GeXyYjltxAXZeLdZk474QH2E5LCcKBmk7~4OYgC~WNCpf8IN6MnwdMqneNo~Ju4j2ZoA1msI6-R3ThAePTUnlNeGMGC4uFj0esTMSNWWwBD0sA0N2VTJR4~VsD1rEAP6gdPaEifp81t7HaXzCWVU-zUMg88RFCiOKgvw1hgfPC6nrlkPAN8lY~muoJRd1NTGj-KR~IQCYp~n9vg__",
    imgAlt: "Secure girls hostel room",
    title: "Secure Living",
    description: "Safe rooms with 24/7 surveillance, common areas, and nutritious meals."
  },
  {
    id: 'gh2',
    imgSrc: "https://media-hosting.imagekit.io/ae3c7996d4ac48e1/ChatGPT%20Image%20Apr%2021,%202025,%2012_15_22%20PM.png?Expires=1839825929&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FeFKBr-03xJviXfJrn07iljr1wRFeK~T0hgvNpvlaTlB1uQc7k1oH2O5rdKSBoiPBzyWzeOZntnoUsXsBd6nLKHYb1t97PdR4I3hjtBsE3YNgPspWGEGkwFWtBX1EgnHfa0AtOdRV38penYAY2k~LqjKGKDKzwStOMoOD1nlMlVkdOdOVmfFqFba4A2-tmnVfvy2Qzn7S-x3yXda1SHwwaiuaKleabrT3D89pO~hnt1LSXAuSVougrvTnmZOtbHARXKVqonoa-MwV8gBCeS-fk~ewqPbwHGFu7frAyH7Ksra74hFr4W8k2HNMdReLnlVDtrMN9hR-vyItH1uNdwJcg__",
    imgAlt: "Girls hostel community area",
    title: "Community Spaces",
    description: "Inclusive environments with modern amenities to foster collaboration."
  }
];

function GirlsHostels() {
  return (
    <section id="girls-hostels" className="hostels-section container section-padding alt-bg" aria-labelledby="girls-hostels-heading">
      <h2 id="girls-hostels-heading" className="section-title">Girls Hostels</h2>
      <div className="hostel-grid">
        {girlsHostelsData.map(hostel => (
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

export default GirlsHostels;
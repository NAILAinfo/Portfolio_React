import React from 'react';

const Education = () => {

  const educationData = [
    {
      icon: "🎓",
      title: "Engineering in computer science",
      degree: "University of sScience and technology Houari Boumediene",
      year: "2022 - Present",
    },
    {
      icon: "🏫",
      title: "Baccalaureate in mathematics",
      degree: "Ferhat Abbas High School",
      year: "2019 - 2022",
    },
  ];

  return (
    <section id="education" className="education-section">

      <h1 id="title"  >Education Journey </h1>

      <div className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-icon">{edu.icon}</div>
            <div className="education-content">
              <h3>{edu.title}</h3>
              <p className="degree">{edu.degree}</p>
              <p className="year">📅 {edu.year}</p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Education;

import React from 'react';

const Certification = () => {
    const certifications = [
        {
            title : "SQL (Intermediate)",
            issuer: "HackerRank",
            date: "2025",
            skills: ["Data base", "SQL"],
            verifyLink : "https://www.hackerrank.com/certificates/C374D48E098B"

        }
    ];
    return (
        <section id="Certifications">
            <h1 id="title">Certification</h1>
            <p>Professional certifications that validate my expertise and commitment to continuous learning</p>
            
            <div id="certification-list">
                
                {certifications.map((cert, index) => (
                    <div key={index} className="certification-card">
                        <h2>{cert.title}</h2>
                        <p>{cert.issuer}</p>
                        <p>Issued: {cert.date}</p>
                        <p>{cert.skills.join(", ")}</p>        

                </div> ),
           
                )}
            </div>
        </section>
    );
};

export default Certification;
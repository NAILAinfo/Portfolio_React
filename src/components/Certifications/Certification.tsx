import React from 'react';
import { Award, ExternalLink } from "lucide-react";


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

                    <div key={index} id="certification-card">
                        <Award size={20} />
                        <h2>{cert.title}</h2>
                        <p>{cert.issuer}</p>
                        <p>Issued: {cert.date}</p>
                        <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">Verify Credential <ExternalLink size={14} /></a>
                        <p>{cert.skills.join(", ")}</p>   

                </div> ),
           
                )}
            </div>
        </section>
    );
};

export default Certification;
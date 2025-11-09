import React from 'react';
import { Award, ExternalLink } from "lucide-react";
const Certification = () => {
    const certifications = [
        {
            title : "SQL ( Basics )",
            issuer: "HackerRank",
            date: "2025",
            skills: ["Data base", "SQL"],
            verifyLink : "https://www.hackerrank.com/certificates/C374D48E077B"
        },
        {
            title : "SQL (Intermediate )",
            issuer: "HackerRank",
            date: "2025",
            skills: ["Data base", "SQL"],
            verifyLink : "https://www.hackerrank.com/certificates/C374D48E098B"
        },
        
    ];
    return (
        <section id="Certifications">
            <h1 id="title">Certification</h1>
            <p>Professional certifications that validate my expertise and commitment to continuous learning</p>
            
            <div id="certification-list">
                {certifications.map((cert, index) => (

                    <div key={index} id="certification-card">
                        
                        <div  className="icon-container">
                            <Award className="icon-award" />
                        </div>
                        <div id='tete_certi'>
                            <div>
                                <h2>{cert.title}</h2>
                                <p>{cert.issuer}</p>
                            </div>
                        </div>
                        <p className="issued">Issued: {cert.date}</p>
                        <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className='verify-link'>Verify Credential <ExternalLink size={14} /></a>
                        <div className="skills">
                                {cert.skills.map((skill, i) => (
                                    <span key={i} className="skill-badge">{skill}</span>
                                ))}
                        </div>


                </div> ),
           
                )}
            </div>
        </section>
    );
};

export default Certification;
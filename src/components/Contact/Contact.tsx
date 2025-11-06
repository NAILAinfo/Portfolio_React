import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        content: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you can add the logic to process the form
        console.log('Form data:', formData);
        alert('Message sent!');
         
        emailjs.send(
      'service_x7b9k3d',        // 👉 ton Service ID
      'template_4p9e5kf',       // 👉 ton Template ID
      formData,                 // 👉 les données du formulaire
      'LA CLE'       // 👉 ta Public Key
    )
        .then(() => {
      alert('Message envoyé avec succès ✅');
      setFormData({ email: '', subject: '', message: '' });
    })
    .catch(() => {
      alert('Erreur lors de l’envoi ❌');
    });
    };
    return (
        <section>
            <div>
                <h1 >Contact me</h1>
                <div id="contact">
                <form id="form" onSubmit={handleSubmit}>                        
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="common-input"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            required
                        />                       
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="common-input"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject "
                            required
                        />                        
                        <textarea
                            id="content"
                            name="content"
                            className="common-textarea"
                            value={formData.content}
                            onChange={handleChange}
                            placeholder="Your message "
                            required
                        />
                    <button type="submit" id="send">
                        Send the message
                    </button>
                </form>
                </div>
            </div>
        </section>
    );
};
export default Contact;
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
        
        // Reset the form
        setFormData({
            email: '',
            subject: '',
            content: ''
        });
    };

    return (
        <section id="contact" className="common-section">
            <div className="common-container">
                <h1 className="common-title">Contact Me</h1>
                
                <form className="common-form" onSubmit={handleSubmit}>
                    <div className="common-form-group">
                        <label htmlFor="email" className="common-label">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="common-input"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                    <div className="common-form-group">
                        <label htmlFor="subject" className="common-label">
                            Subject *
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="common-input"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject of your message"
                            required
                        />
                    </div>

                    <div className="common-form-group">
                        <label htmlFor="content" className="common-label">
                            Message *
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            className="common-textarea"
                            value={formData.content}
                            onChange={handleChange}
                            placeholder="Your message here..."
                            required
                        />
                    </div>

                    <button type="submit" className="common-button">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
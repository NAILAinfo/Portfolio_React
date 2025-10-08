import React from 'react';

const Blogs: React.FC = () => {
    return (
        <section id="blogs" className="common-section">
            <div className="common-container">
                <h1 className="common-title">Blogs</h1>
                <p className="common-text">Welcome to the blog section!</p>
                
                <div className="common-wait-message">
                    🚧 Wait for it! 🚧
                </div>
                
                <p className="common-coming-soon">
                    I'm working on some exciting blog posts about web development, 
                    programming tips, and tech insights. Stay tuned for more content coming soon!
                </p>
            </div>
        </section>
    );
};

export default Blogs;
// src/MainContent.js
import React from 'react';

const MainContent = () => {
    return (
        <main>
            <section id="about">
                <h2>About Me</h2>
                <p>This is a short introduction about myself.</p>
            </section>
            
            <section id="projects">
                {/* Projects will go here */}
            </section>
            
            <section id="contact">
                <h2>Contact Me</h2>
                <p>Email: example@example.com</p>
            </section>
        </main>
    );
};

export default MainContent;

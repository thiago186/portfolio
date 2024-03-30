import React from 'react';
import './AboutMe.css';

import Navbar from '../../components/Navbar/Navbar';

function AboutMe({ headerContent, textContent, imageUrl }) {
    return (
        <div>
            <Navbar />
            <div className="profile-card">
                <h3 className="profile-header">
                    {headerContent}
                </h3>
                <div className="profile-text">
                    {textContent}
                </div>
                <div className="profile-image">
                    <img src={imageUrl} alt="Profile" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
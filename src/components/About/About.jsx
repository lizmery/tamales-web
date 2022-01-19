import React from 'react';
import Mission from './aboutItems/Mission';
import Testimonials from './aboutItems/Testimonials';
import Gallery from './aboutItems/Gallery';

import './About.css';

const About = () => {
    
    return (
        <div className="about">
            <Mission />
            <Testimonials />
            <Gallery />
        </div>
    )
}

export default About

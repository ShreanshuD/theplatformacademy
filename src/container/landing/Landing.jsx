import React from 'react';
import './Landing.css';
import { images } from '../../constants';

const Landing = () => {
    return (
        <>
            <div className="app__landing section__padding">
                <div className="app__landing_hero">
                    <img src={images.HeroImage} alt="Hero Image" />
                </div>
                <div className="app__landing_content flex__center">
                    <div className="app__landing_content-illustration" id="illustration-1"></div>
                    <div className="app__landing_content-title p__large flex__center">
                        Future proof your skills with our next generation  upskilling and training programs
                    </div>
                    <div className="app__landing_content-illustration" id="illustration-2"></div>
                </div>
            </div>
        </>
    );
}

export default Landing;
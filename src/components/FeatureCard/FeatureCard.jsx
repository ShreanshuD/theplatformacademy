import React from 'react';
import './FeatureCard.css';

const FeatureCard = ( {title, illustration} ) => {
    return(
        <>
            <div className="app__featurecard flex__center">
                <div className="app__featurecard-illustration">
                    <img src={illustration} alt={title + " Illustration"} />
                </div>
                <p className="app__featurecard-title p__paragraph">
                    {title}
                </p>
            </div>
        </>
    );
};

export default FeatureCard;

import React from 'react';
import './Features.css';
import { FeatureList } from '../../constants';
import { FeatureCard } from '../../components';

const Features = () => {
    return(
        <>
            <div className="app__features section__padding" id='features'>
                <h3 className="app__features-heading p__heading">
                    Features
                </h3>
                <div className="app__features-container">
                    {
                        FeatureList.map( (feature, idx) => <FeatureCard title={feature.title} illustration={feature.illustration} key={"Feature Card " + idx} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Features;
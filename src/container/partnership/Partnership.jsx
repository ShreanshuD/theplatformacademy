import React from 'react';
import './Partnership.css';
import { Benefits, WhyIndia, Learning } from '../../constants';
import { IllustrationCard, LearningCard } from '../../components';

const Partnership = () => {
    return(
        <>
            <div className="app__partnership section__padding flex__center" id='partnership'>

                <div className="app__partnership_partner">

                    <h3 className="app__partnership_partner-heading p__heading">
                        Partner with us
                    </h3>
                    
                    <p className="app__partnership_partner-description p__paragraph">
                        Create a Vibrant community of trained professionals and tech organisations for unlocking the growth and adoption of your platform.
                        <br></br> <br></br>
                        We provide a single point solution to start and grow the education and training of your platform across India.
                    </p>

                    <p className="app__partnership_partner-subheading p__subheading">
                        Benefits
                    </p>
                    <div className="app__partnership_partner-illustrationcards benefit__illustrationcards">
                        {
                            Benefits.map( (Benefit, idx) => <IllustrationCard title={Benefit.title} illustration={Benefit.illustration} key={"Illustration Card " + idx} />)
                        }
                    </div>

                    <p className="app__partnership_partner-subheading p__subheading">
                        Why India?
                    </p>
                    <div className="app__partnership_partner-illustrationcards whyus__illustrationcards">
                        {
                            WhyIndia.map( (Why, idx) => <IllustrationCard title={Why.title} illustration={Why.illustration} key={"Illustration Card " + idx} />)
                        }
                    </div>

                </div>

                {
                    true && <div className="vertical__partition"></div>
                }

                <div className="app__partnership_learn">

                    <h3 className="app__partnership_learn-heading p__heading">
                        Learn with us
                    </h3>
                    <div className="app__partnership_learn-learningcards">
                        {
                            Learning.map( (learn, idx) => <LearningCard title={learn.title} illustration={learn.illustration} description={learn.description} navigatinglink={learn.navigatinglink} key={"Learning Card " + idx} />)
                        }
                    </div>

                </div>

            </div>
        </>
    );
};

export default Partnership;
import React from 'react';
import './CourseCard.css';
import { images } from '../../constants';

const CourseCard = ( {title, illustration, navigatinglink} ) => {
    return(
        <>
            <a href={navigatinglink} className="app__coursecard-container">
                <div className="app__coursecard">

                    <div className="app__coursecard-illustration">
                        <img src={illustration} alt={title + " Illustration"} />
                    </div>

                    <p className="app__coursecard-title p__paragraph flex__center">
                        {title}
                    </p>

                    <div className="app__coursecard-footer flex__center">
                        <div className="app__coursecard-footer_logo">
                            <img src={images.SnaplogicMonogram} alt="SnapLogic Monogram" />
                        </div>
                        <p className="app__coursecard-footer_name">
                            Snaplogic
                        </p>
                    </div>

                </div>
            </a>
        </>
    );
};

export default CourseCard;

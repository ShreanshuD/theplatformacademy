import React from 'react';
import './CourseCard.css';
import { images } from '../../constants';
import { Link } from 'react-router-dom';

const MobiusCourseCard = ( {title, illustration, navigatinglink} ) => {
    return(
        <>
            <Link to={navigatinglink} className="app__coursecard-container">
                <div className="app__coursecard">

                    <div className="app__coursecard-illustration mobius__logo">
                        <img src={illustration} alt={title + " Illustration"} />
                    </div>

                    <p className="app__coursecard-title p__paragraph">
                        {title}
                    </p>

                    <div className="app__coursecard-footer flex__center">
                        <div className="app__coursecard-footer_logo mobius__monogram">
                            <img src={images.MobiusMonogram} alt="Mobius Monogram" />
                        </div>
                        <p className="app__coursecard-footer_name">
                            MOBIUS
                        </p>
                    </div>

                </div>
            </Link>
        </>
    );
};

export default MobiusCourseCard;
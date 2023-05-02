import React from 'react';
import './Snaplogic.css';
import { images } from '../../constants';
import { Link } from 'react-router-dom';

const Snaplogic = ( {type} ) => {
    return(
        <>
            <div className="app__snaplogic section__padding">

                <div className="snaplogic__monogram_top">
                    <img src={images.SnaplogicMonogram_UR} alt="SnapLogic Monogram" />
                </div>
                <div className="snaplogic__monogram_bottom">
                    <img src={images.SnaplogicMonogram_LL} alt="SnapLogic Monogram" />
                </div>

                {
                    type === "CoursesOffered" &&

                    <p className="app__snaplogic-heading p__subheading">
                        Offered by
                    </p>
                }

                <div className="app__snaplogic-logo">
                    <img src={images.SnaplogicLogo} alt="Snaplogic Logo" />
                </div>

                <p className="app__snaplogic-description p__paragraph">
                    Snaplogic is a powerful platform for data integration, API management, and automation. It allows users to connect data from various sources, such as databases, applications, and files, and automate workflows for faster and more efficient data processing.
                </p>

                {
                    type === "CoursesOffered" ?

                    <Link to="/courses" className="app__snaplogic-button">
                        <button className='flex__center' type='button'>View Other Courses</button>
                    </Link>
                    :
                    <Link to="https://learn.snaplogic.com/" target="_blank" className="app__snaplogic-button">
                        <button className='flex__center' type='button'>Visit Website</button>
                    </Link>
                }
                

            </div>
        </>
    );
};

export default Snaplogic;
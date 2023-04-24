import React from 'react';
import './Snaplogic.css';
import { images } from '../../constants';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

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

                <div className="app__snaplogic-logo">
                    <img src={images.SnaplogicLogo} alt="Snaplogic Logo" />
                </div>

                <p className="app__snaplogic-description p__paragraph">
                    Snaplogic is a powerful platform for data integration, API management, and automation. It allows users to connect data from various sources, such as databases, applications, and files, and automate workflows for faster and more efficient data processing.
                </p>

                {
                    type === "Course Details Page" ?

                    <a href="#" className="app__snaplogic-button">
                        <button className='flex__center' type='button'>View Other Courses</button>
                    </a>
                    :
                    <a href="https://learn.snaplogic.com/" target="_blank" className="app__snaplogic-button">
                        <button className='flex__center' type='button'>Visit Website <MdOutlineKeyboardArrowDown className='dropdown_arrow' /></button>
                    </a>
                }
                

            </div>
        </>
    );
};

export default Snaplogic;

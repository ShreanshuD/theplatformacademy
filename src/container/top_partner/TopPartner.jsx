import React from 'react';
import './TopPartner.css';
import { images } from '../../constants';
import { TopCourses } from '../../constants/data';
import { CourseCard } from '../../components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const TopPartner = () => {
    return(
        <>
            <div className="app__partner section__padding">

                <div className="snaplogic__monogram_top">
                    <img src={images.SnaplogicMonogram_UR} alt="SnapLogic Monogram" />
                </div>
                <div className="snaplogic__monogram_bottom">
                    <img src={images.SnaplogicMonogram_LL} alt="SnapLogic Monogram" />
                </div>

                <h3 className="app__partner-title p__heading">
                    Our Top Partner
                </h3>

                <div className="app__partner-logo">
                    <img src={images.SnaplogicLogo} alt="Snaplogic Logo" />
                </div>

                <p className="app__partner-description p__paragraph">
                    Snaplogic is a powerful platform for data integration, API management, and automation. It allows users to connect data from various sources, such as databases, applications, and files, and automate workflows for faster and more efficient data processing.
                </p>

                <h5 className="app__partner-subheading p__subheading">
                    Top Courses offered by the partner
                </h5>

                <div className="app__partner-coursecontainer">
                    {
                        TopCourses.map( (course, idx) => <CourseCard title={course.title} illustration={course.illustration} navigatinglink={course.navigatinglink} key={"Course " + course.title + idx} />)
                    }
                </div>

                <a href="#" className="app__partner-button">
                    <button className='flex__center' type='button'>Learn More <MdOutlineKeyboardArrowDown className='dropdown_arrow' /></button>
                </a>

            </div>
        </>
    );
};

export default TopPartner;
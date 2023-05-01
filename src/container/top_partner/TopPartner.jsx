import React from 'react';
import './TopPartner.css';
import { images } from '../../constants';
import { TopCourses } from '../../constants/data';
import { CourseCard } from '../../components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TopPartner = ( {type} ) => {
    return(
        <>
            {
                type === 'top_partner' &&

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

                    <Link to="/courses" className="app__partner-button">
                        <button className='flex__center' type='button'>Learn More <MdOutlineKeyboardArrowDown className='dropdown_arrow' /></button>
                    </Link>

                </div>
            }

            {
                type === 'top_courses' &&

                <div className="app__partner section__padding" style={ {backgroundColor: 'var(--color-white)' } }>

                    <h5 className="app__partner-subheading p__heading" style={ {margin: '0 0 3rem', color: 'var(--color-blue)'}}>
                        Top Courses offered by the partner
                    </h5>

                    <div className="app__partner-coursecontainer">
                        {
                            TopCourses.map( (course, idx) => <CourseCard title={course.title} illustration={course.illustration} navigatinglink={course.navigatinglink} key={"Course " + course.title + idx} />)
                        }
                    </div>

                    <Link to="/courses" className="app__courses-button">
                        <button className='flex__center' type='button'>View All <MdOutlineKeyboardArrowDown className='dropdown_arrow' /></button>
                    </Link>

                </div>
            }
        </>
    );
};

export default TopPartner;
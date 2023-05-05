import React from 'react';
import './TopPartner.css';
import { images } from '../../constants';
import { TopSnaplogicCourses, TopMobiusCourses } from '../../constants/data';
import { SnaplogicCourseCard, MobiusCourseCard } from '../../components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

const TopPartner = ( {type} ) => {
    return(
        <>
            {
                type === 'top_partner' &&

                <Carousel className="app__events-carousel"
                    autoPlay={true}
                    emulateTouch={true}
                    infiniteLoop={true}
                    showStatus={false}
                    showIndicators={true}
                    showArrows={window.innerWidth > 1150}
                    useKeyboardArrows={true}
                >

                    <div className="app__partner section__padding" id='partner__snaplogic'>

                        <div className="snaplogic__monogram_top">
                            <img src={images.SnaplogicMonogram_UR} alt="SnapLogic Monogram" />
                        </div>
                        <div className="snaplogic__monogram_bottom">
                            <img src={images.SnaplogicMonogram_LL} alt="SnapLogic Monogram" />
                        </div>

                        <h3 className="app__partner-title p__heading">
                            Our Top Partners
                        </h3>

                        <div className="app__partner-logo">
                            <img src={images.SnaplogicLogo} alt="Snaplogic Logo" />
                        </div>

                        <p className="app__partner-description p__paragraph">
                            Snaplogic is a powerful platform for data integration, API management, and automation. It allows users to connect data from various sources, such as databases, applications, and files, and automate workflows for faster and more efficient data processing.
                            <br></br>
                            SnapLogic also includes advanced features such as data transformation, data quality, and data governance, which enable users to clean, enrich, and secure their data as it flows through the integration pipeline. The platform also provides real-time monitoring and alerting capabilities to ensure that data is flowing smoothly and any issues are addressed promptly.
                        </p>

                        <h5 className="app__partner-subheading p__subheading">
                            Top Courses offered by the partner
                        </h5>

                        <div className="app__partner-coursecontainer">
                            {
                                TopSnaplogicCourses.map( (course, idx) => <SnaplogicCourseCard title={course.title} illustration={course.illustration} navigatinglink={course.navigatinglink} key={"Course " + course.title + idx} />)
                            }
                        </div>

                        <Link to="/snaplogic" className="app__partner-button">
                            <button className='flex__center' type='button'>Learn More <MdOutlineKeyboardArrowDown className='dropdown_arrow' /></button>
                        </Link>

                    </div>

                    <div className="app__partner section__padding" id='partner__mobius'>

                        <div className="mobius__monogram_top">
                            <img src={images.MobiusMonogram_UR} alt="Mobius Monogram" />
                        </div>
                        <div className="mobius__monogram_bottom">
                            <img src={images.MobiusMonogram__LL} alt="Mobius Monogram" />
                        </div>

                        <h3 className="app__partner-title p__heading">
                            Our Top Partners
                        </h3>

                        <div className="app__partner-logo" style={ {marginBottom: '1rem'} }>
                            <img src={images.MobiusLogo} alt="Mobius Logo" />
                        </div>

                        <p className="app__partner-description p__paragraph">
                            Mobius DTaaS offers a suite of five SaaS tools designed to accelerate digital transformation and make it more accessible for businesses of all sizes. The Mobius DTaaS suite includes Pascal Intelligence (PI), BoltzmannBot (BoB), Monet, Vinci, and HolaVerse for low-code app development, customer interaction automation, digital marketing optimization, custom marketplace creation, and omnichannel engagement enhancement.
                        </p>

                        <h5 className="app__partner-subheading p__subheading">
                            Top Courses offered by the partner
                        </h5>

                        <div className="app__partner-coursecontainer">
                            {
                                TopMobiusCourses.map( (course, idx) => <MobiusCourseCard title={course.title} illustration={course.illustration} navigatinglink={course.navigatinglink} key={"Course " + course.title + idx} />)
                            }
                        </div>

                        <Link to="/under-construction" className="app__partner-button">
                            <button className='flex__center' type='button'>Learn More <MdOutlineKeyboardArrowDown className='dropdown_arrow' /></button>
                        </Link>

                    </div>

                </Carousel>
            }

            {
                type === 'top_snaplogic_courses' &&

                <div className="app__partner section__padding" style={ {backgroundColor: 'var(--color-white)', minHeight: 'auto' } }>

                    <h5 className="app__partner-subheading p__heading" style={ {margin: '0 0 3rem', color: 'var(--color-blue)'}}>
                        Top Courses offered by the partner
                    </h5>

                    <div className="app__partner-coursecontainer">
                        {
                            TopSnaplogicCourses.map( (course, idx) => <SnaplogicCourseCard title={course.title} illustration={course.illustration} navigatinglink={course.navigatinglink} key={"Course " + course.title + idx} />)
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
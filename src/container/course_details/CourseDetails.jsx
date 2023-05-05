import React from 'react';
import './CourseDetails.css';
import { FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Snaplogic from '../snaplogic/Snaplogic';

const CourseDetails = ( {title, illustration, description, about, curriculum} ) => {
    return(
        <>
            <div className="app__coursedetails section__padding">

                <h3 className="app__coursedetails_heading p__heading">
                    {title}
                </h3>

                <div className="app__coursedetails_hero flex__center">

                    <div className="app__coursedetails_hero-illustration flex__center">
                        <img src={illustration} alt={title + " Illustration"} />
                    </div>

                    <div className="app__coursedetails_hero-details flex__center">
                        <div className='app__coursedetails_hero-details-info'>
                            <p className="app__coursedetails_hero-details-info-subheading p__subheading">
                                Description
                            </p>
                            <p className="app__coursedetails_hero-details-info-description p__paragraph">
                                {description}
                            </p>
                        </div>
                        <div className="app__coursedetails_hero-details-navigation">
                            <Link to="" className="app__coursedetails_hero-details-navigation-button">
                                <button className='flex__center' type='button'><FiShare2 className='share_icon'/> Share</button>
                            </Link>
                            <Link to="" className="app__coursedetails_hero-details-navigation-button">
                                <button className='flex__center' type='button'>Enroll Now</button>
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="app__coursedetails_content flex__center">

                    {/* {
                        about && */}
                        
                        <div className={"app__coursedetails_content-about"}>
                            <p className="p__subheading">
                                About this course
                            </p>
                            <p className="p__paragraph">
                                {about}
                            </p>
                        </div>
                    {/* } */}

                    {/* {
                        curriculum && */}

                        <div className={"app__coursedetails_content-curriculum"}>
                            <p className="p__subheading">
                                Curriculum
                            </p>
                            <p className={"p__paragraph"}>
                                {curriculum}
                            </p>
                        </div>
                    {/* } */}

                </div>

            </div>

            <Snaplogic type={"CoursesOffered"} />
        </>
    );
};

export default CourseDetails;
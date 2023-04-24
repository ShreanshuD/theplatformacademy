import React from 'react';
import './CourseDetails.css';
import { FiShare2 } from 'react-icons/fi';
import Snaplogic from '../snaplogic/Snaplogic';

const CourseDetails = ( {title, illustration, description, about, curriculum} ) => {
    return(
        <>
            <div className="app__coursedetails section__padding">

                <h3 className="app__coursedetails-heading p__heading">
                    {title}
                </h3>

                <div className="app__coursedetails-illustration flex__center">
                    <img src={illustration} alt={title + " Illustration"} />
                </div>

                <div className="app__coursedetails-navigation">
                    <a href="#" className="app__coursedetails-navigation-button">
                        <button className='flex__center' type='button'><FiShare2 className='share_icon'/> Share</button>
                    </a>
                    <a href="#" className="app__coursedetails-navigation-button">
                        <button className='flex__center' type='button'>Enroll Now</button>
                    </a>
                </div>

                {
                    description &&

                    <>
                        <p className="app__coursedetails-subheading p__subheading">
                            Description
                        </p>
                        <p className="app__coursedetails-description p__paragraph">
                            {description}
                        </p>
                    </>
                }

                <div className="app__coursedetails-content flex__center">

                    {
                        about &&
                        
                        <div className={curriculum ? "app__coursedetails-content-about flex__center" : "app__coursedetails-content-aboutonly flex__center"}>
                            <p className="p__subheading">
                                About this course
                            </p>
                            <p className="p__paragraph">
                                {about}
                            </p>
                        </div>
                    }

                    {
                        curriculum &&

                        <div className={about ? "app__coursedetails-content-curriculum flex__center" : "app__coursedetails-content-curriculumonly flex__center"}>
                            <p className="p__subheading">
                                Curriculum
                            </p>
                            <p className={"p__paragraph"}>
                                {curriculum}
                            </p>
                        </div>
                    }

                </div>

                <h3 className="app__coursedetails-heading p__heading">
                    Offered by
                </h3>

            </div>

            <Snaplogic type={"Course Details Page"} />
        </>
    );
};

export default CourseDetails;
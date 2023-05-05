import React from 'react';
import './Courses.css';
import { AllSnaplogicCourses } from '../../constants';
import { SnaplogicCourseCard } from '../../components';

const SnaplogicCourses = ( {type} ) => {
    return(
        <>
            <div className="app__allcourses section__padding">
                <h3 className="app__allcourses-heading p__heading">
                    {
                        type === "SnapLogicInfo" ? "Courses Offered" : "All Courses"
                    }
                </h3>
                <div className="app__allcourses-coursecontainer">
                    {
                        AllSnaplogicCourses.map( (course, idx) => <SnaplogicCourseCard title={course.title} illustration={course.illustration} navigatinglink={course.navigatinglink} key={"Course " + course.title + idx} />)
                    }
                </div>
            </div>
        </>
    );
};

export default SnaplogicCourses;
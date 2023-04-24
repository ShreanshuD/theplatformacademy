import React from 'react';
import './Courses.css';
import { AllCourses } from '../../constants/data';
import { CourseCard } from '../../components';

const Courses = () => {
    return(
        <>
            <div className="app__allcourses section__padding">
                <h3 className="app__allcourses-heading p__heading">
                    All Courses
                </h3>
                <div className="app__allcourses-coursecontainer">
                    {
                        AllCourses.map( (course, idx) => <CourseCard title={course.title} illustration={course.illustration} navigatinglink={course.navigatinglink} key={"Course " + course.title + idx} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Courses;
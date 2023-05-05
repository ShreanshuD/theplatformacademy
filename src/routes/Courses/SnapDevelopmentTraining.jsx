import React from 'react';
import { NavBar, Footer } from '../../container';
import { CourseDetails } from '../../container';
import { SnaplogicCourseDetails } from '../../constants';

const SnapDevelopmentTraining = () => {
    return(
        <>
            <NavBar />
            <CourseDetails title={SnaplogicCourseDetails[1].title} illustration={SnaplogicCourseDetails[1].illustration} description={SnaplogicCourseDetails[1].description} about={SnaplogicCourseDetails[1].about} curriculum={SnaplogicCourseDetails[1].curriculum} />
            <Footer />
        </>
    );
};

export default SnapDevelopmentTraining;
import React from 'react';
import { NavBar, Footer } from '../../container';
import { CourseDetails } from '../../container';
import { SnaplogicCourseDetails } from '../../constants';

const SnaplogicIntegratorTraining = () => {
    return(
        <>
            <NavBar />
            <CourseDetails title={SnaplogicCourseDetails[3].title} illustration={SnaplogicCourseDetails[3].illustration} description={SnaplogicCourseDetails[3].description} about={SnaplogicCourseDetails[3].about} curriculum={SnaplogicCourseDetails[3].curriculum} />
            <Footer />
        </>
    );
};

export default SnaplogicIntegratorTraining;
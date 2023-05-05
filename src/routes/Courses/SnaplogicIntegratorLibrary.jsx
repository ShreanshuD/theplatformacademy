import React from 'react';
import { NavBar, Footer } from '../../container';
import { CourseDetails } from '../../container';
import { SnaplogicCourseDetails } from '../../constants';

const SnaplogicIntegratorLibrary = () => {
    return(
        <>
            <NavBar />
            <CourseDetails title={SnaplogicCourseDetails[4].title} illustration={SnaplogicCourseDetails[4].illustration} description={SnaplogicCourseDetails[4].description} about={SnaplogicCourseDetails[4].about} curriculum={SnaplogicCourseDetails[4].curriculum} />
            <Footer />
        </>
    );
};

export default SnaplogicIntegratorLibrary;
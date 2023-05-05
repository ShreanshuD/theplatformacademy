import React from 'react';
import { NavBar, Footer } from '../../container';
import { CourseDetails } from '../../container';
import { SnaplogicCourseDetails } from '../../constants';

const SnaplogicIntegratorCertification = () => {
    return(
        <>
            <NavBar />
            <CourseDetails title={SnaplogicCourseDetails[2].title} illustration={SnaplogicCourseDetails[2].illustration} description={SnaplogicCourseDetails[2].description} about={SnaplogicCourseDetails[2].about} curriculum={SnaplogicCourseDetails[2].curriculum} />
            <Footer />
        </>
    );
};

export default SnaplogicIntegratorCertification;
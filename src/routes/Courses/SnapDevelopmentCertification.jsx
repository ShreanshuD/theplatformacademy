import React from 'react';
import { NavBar, Footer } from '../../container';
import { CourseDetails } from '../../container';
import { SnaplogicCourseDetails } from '../../constants';

const SnapDevelopmentCertification = () => {
    return(
        <>
            <NavBar />
            <CourseDetails title={SnaplogicCourseDetails[0].title} illustration={SnaplogicCourseDetails[0].illustration} description={SnaplogicCourseDetails[0].description} about={SnaplogicCourseDetails[0].about} curriculum={SnaplogicCourseDetails[0].curriculum} />
            <Footer />
        </>
    );
};

export default SnapDevelopmentCertification;
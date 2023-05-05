import React from 'react';
import { NavBar, Footer } from '../../container';
import { CourseDetails } from '../../container';
import { SnaplogicCourseDetails } from '../../constants';

const SnaplogicArchitectCertification = () => {
    return(
        <>
            <NavBar />
            <CourseDetails title={SnaplogicCourseDetails[7].title} illustration={SnaplogicCourseDetails[7].illustration} description={SnaplogicCourseDetails[7].description} about={SnaplogicCourseDetails[7].about} curriculum={SnaplogicCourseDetails[7].curriculum} />
            <Footer />
        </>
    );
};

export default SnaplogicArchitectCertification;
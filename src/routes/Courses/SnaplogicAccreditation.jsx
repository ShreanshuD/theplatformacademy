import React from 'react';
import { NavBar, Footer } from '../../container';
import { CourseDetails } from '../../container';
import { SnaplogicCourseDetails } from '../../constants';

const SnaplogicAccreditation = () => {
    return(
        <>
            <NavBar />
            <CourseDetails title={SnaplogicCourseDetails[11].title} illustration={SnaplogicCourseDetails[11].illustration} description={SnaplogicCourseDetails[11].description} about={SnaplogicCourseDetails[11].about} curriculum={SnaplogicCourseDetails[11].curriculum} />
            <Footer />
        </>
    );
};

export default SnaplogicAccreditation;
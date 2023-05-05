import React from 'react';
import { NavBar, Footer } from '../../container';
import { CourseDetails } from '../../container';
import { SnaplogicCourseDetails } from '../../constants';

const SnaplogicAdministratorCertification = () => {
    return(
        <>
            <NavBar />
            <CourseDetails title={SnaplogicCourseDetails[5].title} illustration={SnaplogicCourseDetails[5].illustration} description={SnaplogicCourseDetails[5].description} about={SnaplogicCourseDetails[5].about} curriculum={SnaplogicCourseDetails[5].curriculum} />
            <Footer />
        </>
    );
};

export default SnaplogicAdministratorCertification;
import React from 'react';
import { NavBar, Footer } from '../../container';
import { CourseDetails } from '../../container';
import { SnaplogicCourseDetails } from '../../constants';

const SnaplogicCertifiedEnterpriseAutomationProfessional = () => {
    return(
        <>
            <NavBar />
            <CourseDetails title={SnaplogicCourseDetails[10].title} illustration={SnaplogicCourseDetails[10].illustration} description={SnaplogicCourseDetails[10].description} about={SnaplogicCourseDetails[10].about} curriculum={SnaplogicCourseDetails[10].curriculum} />
            <Footer />
        </>
    );
};

export default SnaplogicCertifiedEnterpriseAutomationProfessional;
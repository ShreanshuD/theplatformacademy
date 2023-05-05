import React from 'react';
import { NavBar, Footer } from '../../container';
import { CourseDetails } from '../../container';
import { SnaplogicCourseDetails } from '../../constants';

const SnaplogicAdministratorTraining = () => {
    return(
        <>
            <NavBar />
            <CourseDetails title={SnaplogicCourseDetails[6].title} illustration={SnaplogicCourseDetails[6].illustration} description={SnaplogicCourseDetails[6].description} about={SnaplogicCourseDetails[6].about} curriculum={SnaplogicCourseDetails[6].curriculum} />
            <Footer />
        </>
    );
};

export default SnaplogicAdministratorTraining;
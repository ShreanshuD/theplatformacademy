import React from 'react';
import { NavBar, Footer } from '../../container';
import { CourseDetails } from '../../container';
import { SnaplogicCourseDetails } from '../../constants';

const SnaplogicArchitectTraining = () => {
    return(
        <>
            <NavBar />
            <CourseDetails title={SnaplogicCourseDetails[8].title} illustration={SnaplogicCourseDetails[8].illustration} description={SnaplogicCourseDetails[8].description} about={SnaplogicCourseDetails[8].about} curriculum={SnaplogicCourseDetails[8].curriculum} />
            <Footer />
        </>
    );
};

export default SnaplogicArchitectTraining;
import React from 'react';
import { NavBar, Footer } from '../../container';
import { CourseDetails } from '../../container';
import { SnaplogicCourseDetails } from '../../constants';

const SnaplogicContinuousIntegrationAndContinuousDelivery = () => {
    return(
        <>
            <NavBar />
            <CourseDetails title={SnaplogicCourseDetails[9].title} illustration={SnaplogicCourseDetails[9].illustration} description={SnaplogicCourseDetails[9].description} about={SnaplogicCourseDetails[9].about} curriculum={SnaplogicCourseDetails[9].curriculum} />
            <Footer />
        </>
    );
};

export default SnaplogicContinuousIntegrationAndContinuousDelivery;
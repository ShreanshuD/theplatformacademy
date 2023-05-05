import React from 'react';
import { NavBar, TopPartner,Footer } from '../container';
import { InfoCard, CustomCard } from '../components';
import { StudentsFutureReady, CustomCourse } from '../constants';



const EducationalInstitutesInfo = () => {
    return(
        <>
            <NavBar />
            <InfoCard title={StudentsFutureReady.title} description={StudentsFutureReady.description} image={StudentsFutureReady.image} navigatingLink={StudentsFutureReady.navigatingLink} />
            <TopPartner type="top_snaplogic_courses" />
            <CustomCard title={CustomCourse.title} description={CustomCourse.description} image={CustomCourse.image} navigatingLink={CustomCourse.navigatingLink} />
            <Footer />
        </>
    );
};

export default EducationalInstitutesInfo;
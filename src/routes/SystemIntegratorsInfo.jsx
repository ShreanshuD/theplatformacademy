import React from 'react';
import { NavBar, TopPartner,Footer } from '../container';
import { InfoCard, CustomCard } from '../components';
import { BoostYourBusiness, CustomCourse } from '../constants';



const SystemIntegratorsInfo = () => {
    return(
        <>
            <NavBar />
            <InfoCard title={BoostYourBusiness.title} description={BoostYourBusiness.description} image={BoostYourBusiness.image} navigatingLink={BoostYourBusiness.navigatingLink} />
            <TopPartner type="top_snaplogic_courses" />
            <CustomCard title={CustomCourse.title} description={CustomCourse.description} image={CustomCourse.image} navigatingLink={CustomCourse.navigatingLink} />
            <Footer />
        </>
    );
};

export default SystemIntegratorsInfo;
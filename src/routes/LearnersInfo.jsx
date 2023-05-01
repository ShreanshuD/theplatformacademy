import React from 'react';
import { NavBar, TopPartner,Footer } from '../container';
import { InfoCard } from '../components';
import { BoostYourCareer } from '../constants';



const LearnersInfo = () => {
    return(
        <>
            <NavBar />
            <InfoCard title={BoostYourCareer.title} description={BoostYourCareer.description} image={BoostYourCareer.image} navigatingLink={BoostYourCareer.navigatingLink} />
            <TopPartner type="top_courses" />
            <Footer />
        </>
    );
};

export default LearnersInfo;

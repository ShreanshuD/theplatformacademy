import React from 'react';
import { NavBar, Snaplogic, Courses, Footer } from '../container';


const AboutSnapLogic = () => {
    return(
        <>
            <NavBar />
            <Snaplogic type="SnapLogicInfo" />
            <Courses type="SnapLogicInfo" />
            <Footer />
        </>
    );
};

export default AboutSnapLogic;
import React from 'react';
import { NavBar, Landing, Partnership, Features, Presence, TopPartner, Events, Footer } from '../container';



const Home = () => {
    return(
        <>
            <NavBar />
            <Landing />
            <Partnership />
            <Features />
            <Presence />
            <TopPartner type="top_partner" />
            <Events />
            <Footer />
        </>
    );
};

export default Home;

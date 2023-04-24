import React from 'react';
import './Events.css';
// import { images } from '../../constants';

const Events = () => {
    return(
        <>
            <div className="app__events section__padding">

                <h3 className="app__events-heading p__heading">
                    Our Events
                </h3>

                <div className="app__events-content flex__center">

                    <div className="app__events-content_image app__events_bg">
                        {/* <img src={images.Events_Image} alt="SnapLogic Event" /> */}
                    </div>

                    <p className="app__events-content_info p__subheading">
                        SnapLogic Academy Launch Event
                        <br></br>
                        <br></br>
                        6<sup>th</sup> May 2023, 11:00 A.M.
                        <br></br>
                        <br></br>
                        Venues: 
                        <br></br>
                        <span>
                            Mumbai : The Taj Mahal Palace
                            <br></br>
                            Bangalore : Grand Hyatt Hotel
                            <br></br>
                            Hyderabad : xxx xxx xxx
                            <br></br>
                            Gurugram : xxx xxx xxx
                            <br></br>
                            Pune : xxx xxx xxx
                            <br></br>
                            Chennai : xxx xxx xxx
                        </span>
                    </p>

                </div>

                <a href="#" className="app__events-button">
                    <button className='flex__center' type='button'>View All Events</button>
                </a>

            </div>
        </>
    );
};

export default Events;
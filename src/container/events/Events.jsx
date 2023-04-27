import React from 'react';
import './Events.css';
import { Link } from 'react-router-dom';

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
                        6<sup>th</sup> May 2023, 11:00 AM
                        <br></br>
                        <br></br>
                        Venues: 
                        <br></br>
                        <span>
                            <b>Mumbai</b> : Hyatt Centric Juhu
                            <br></br>
                            <b>Bangalore</b> : Hyatt Centric MG Road Bangalore
                            <br></br>
                            <b>Hyderabad</b> : Hyatt Place, Banjara Hills
                            <br></br>
                            <b>Delhi NCR</b> : Hyatt Place Gurgaon
                            <br></br>
                            <b>Pune</b> : Courtyard by Marriott Pune, Hinjewadi
                            <br></br>
                            <b>Chennai</b> : Novotel Chennai Chamiers Road Hotel
                        </span>
                    </p>

                </div>

                <Link to="/event" className="app__events-button">
                    <button className='flex__center' type='button'>View All Events</button>
                </Link>

            </div>
        </>
    );
};

export default Events;
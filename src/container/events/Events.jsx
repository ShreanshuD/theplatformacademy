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

                    <div className="app__events-content_info">
                        <p className="app__event-content_info-title p__subheading">
                            SL EduSeries - ETL &  Integration Job Seminar
                        </p>
                        <p className="app__events-content_info-details p__paragraph">
                            <br></br>
                            <span className='p__paragraph'>11:00 am - 04:00 pm | 6th May 2023</span>
                            <br></br>
                            <br></br>
                            Welcome to the ETL & Integration Job Seminar by  SL EduSeries on the occasion of SnapLogic Academy India launch event. Join us for an exciting day filled with valuable insights, informative discussions, and networking opportunities. This event is designed for IT professionals, business leaders, and anyone interested in the latest trends and innovations in the world of technology.
                            <br></br>
                            <br></br>
                            The event will kick off with a keynote address from a prominent industry leader, followed by a speech about the twin disruption of AI and No-Code, and how it's changing the game for businesses worldwide. The keynote will be followed by a panel discussion on ETL and Data Integration, where industry leaders will share their experiences, best practices, and lessons learned in this space.
                        </p>
                    </div>

                </div>

                <Link to="/event" className="app__events-button">
                    <button className='flex__center' type='button'>View All Events</button>
                </Link>

            </div>
        </>
    );
};

export default Events;
import React from 'react';
import './Registration.css';
import { LaunchEvent } from '../../constants';
import { images } from '../../constants';
import { Link } from 'react-router-dom';



const Registration = () => {
    return(
        <>
            <div className="app__registration section__padding">

                <div className="app__registration_event flex__center">

                    <div className="app__registration_event-image">
                        <img src={LaunchEvent.eventImage} alt="The Platform Academy Launch Event" />
                    </div>

                    <div className="app__registration_event-info-container flex__center">
                        <div className="app__registration_event-info">
                            <h3 className="app__registration_event-info-title p__subheading">
                                {LaunchEvent.eventTitle}
                            </h3>
                            <div className="app__registration_event-info-eventdetails flex__center">
                                <img src={images.BookmarkIcon} alt="Bookmark Icon" />
                                <p className="p__paragraph">
                                    {LaunchEvent.eventType}
                                </p>
                            </div>
                            <div className="app__registration_event-info-eventdetails flex__center">
                                <img src={images.CalendarIcon} alt="Calendar Icon" />
                                <p className="p__paragraph">
                                    {LaunchEvent.eventType}
                                </p>
                            </div>
                            <div className="app__registration_event-info-eventdetails flex__center">
                                <img src={images.LocationIcon} alt="Location Icon" />
                                <p className="p__paragraph">
                                    {LaunchEvent.eventLocation}
                                </p>
                            </div>
                            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfUEqTpU3XaGmhDDTT8367wFZAVGLrLU5wg0pbN6nbCB8omLw/viewform" target="_blank" className="app__registration_event-info-register">
                                <button type='button'>Register Now</button>
                            </Link>
                        </div>
                    </div>

                </div>

                <p className="app__registration_about p__subheading">
                    About the event
                </p>
                <p className="app__registration_aboutdescription p__paragraph">
                    {LaunchEvent.eventDescription}
                </p>

                <div className="app__registration_details flex__center">

                    <div className="app__registration_details-itinerary">
                        <p className='p__subheading'><b>Event Itinerary:</b></p>
                        {
                            LaunchEvent.eventItinerary.map( (itineraryDetail) => {
                                return (
                                    <div className='app__registration_details-itinerary-info flex__center'>
                                        <p className='p__paragraph'>{itineraryDetail.time}</p>
                                        <p className='p__paragraph'>{itineraryDetail.details}</p>
                                    </div>
                                );
                            })
                        }
                    </div>

                    <div className="app__registration_details-venue">
                        <p className='p__subheading'><b>Event Venues:</b></p>
                        {
                            LaunchEvent.eventVenue.map( (venueDetail) => {
                                return (
                                    <div className='app__registration_details-venue-info flex__center'>
                                        <p className='p__paragraph'><b>{venueDetail.city}</b></p>
                                        <p className='p__paragraph'>&ndash;</p>
                                        <p className='p__paragraph'>{venueDetail.address}</p>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>

            </div>
        </>
    );
};

export default Registration;
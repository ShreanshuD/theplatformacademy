import React from 'react';
import './Registration.css';
import { LaunchEvent } from '../../constants';
import { images } from '../../constants';



const Registration = () => {
    return(
        <>
            <div className="app__registration section__padding">

                <div className="app__registration_event flex__center">

                    <div className="app__registration_event-image">
                        <img src={LaunchEvent.eventImage} alt="The Platform Academy Launch Event" />
                    </div>

                    <div className="app__registration_event-info">
                        <h3 className="app__registration_event-info-title p__subheading">
                            {LaunchEvent.eventTitle}
                        </h3>
                        <div className="app__registration_event-info-eventtype">
                            <img src={images.BookmarkIcon} alt="Bookmark Icon" />
                            <p className="p__paragraph">
                                {LaunchEvent.eventType}
                            </p>
                        </div>
                        <div className="app__registration_event-info-eventdate">
                            <img src={images.CalendarIcon} alt="Calendar Icon" />
                            <p className="p__paragraph">
                                {LaunchEvent.eventType}
                            </p>
                        </div>
                        <div className="app__registration_event-info-eventlocation">
                            <img src={images.LocationIcon} alt="Location Icon" />
                            <p className="p__paragraph">
                                {LaunchEvent.eventLocation}
                            </p>
                        </div>
                        <a href="#" className="app__registration_event-info-register">
                            <button type='button'>Register</button>
                        </a>
                    </div>

                </div>

                <p className="app__registration_about p__subheading">
                    About the event
                </p>
                <p className="app__registration_aboutdescription">
                    {LaunchEvent.eventDescription}
                </p>

                <div className="app__registration_details flex__center">

                    <div className="app__registration_details-itinerary">
                        <p>Event Itinerary:</p>
                        {
                            LaunchEvent.eventItinerary.map( (itineraryDetail) => {
                                return (
                                    <div className='flex__center'>
                                        <p>{itineraryDetail.time}</p>
                                        <p>{itineraryDetail.details}</p>
                                    </div>
                                );
                            })
                        }
                    </div>

                    <div className="app__registration_details-venue">
                        <p>Event Venues:</p>
                        {
                            LaunchEvent.eventVenue.map( (venueDetail) => {
                                return (
                                    <div className='flex__center'>
                                        <p>{venueDetail.city}</p>
                                        <p>&ndash;</p>
                                        <p>{venueDetail.address}</p>
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
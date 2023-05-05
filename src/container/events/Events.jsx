import React from 'react';
import './Events.css';
import './UpdatedCarousel.css';
import { EventList } from '../../constants/index.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const EventDescription = ( {id, title, description, image} ) => {
    return(
        <>
            <div className="app__events-content flex__center">

                <div className="app__events-content_image">
                    <img src={image} alt={id + " image"} />
                </div>

                <div className="app__events-content_info">
                    <p className="app__event-content_info-title p__subheading">
                        {title}
                    </p>
                    <p className="app__events-content_info-details p__paragraph">
                        {description}
                    </p>
                </div>

            </div>
        </>
    );
};

const Events = () => {
    return(
        <>
            <div className="app__events section__padding">

                <h3 className="app__events-heading p__heading">
                    Our Events
                </h3>

                <Carousel className="app__events-carousel"
                    autoPlay={true}
                    emulateTouch={true}
                    infiniteLoop={true}
                    showStatus={false}
                    showIndicators={true}
                    showArrows={false}
                    useKeyboardArrows={true}
                >
                    {
                        EventList.map( (event, idx) => 
                        <>
                            <EventDescription key={event.id + idx + " Event"} id={event.id} title={event.title} description={event.description} image={event.image}/>
                            <Link to={event.navigatingLink} className="app__events-button">
                                <button className='flex__center' type='button'>View Event</button>
                            </Link>
                        </>
                        )
                    }
                </Carousel>

                

            </div>
        </>
    );
};

export default Events;

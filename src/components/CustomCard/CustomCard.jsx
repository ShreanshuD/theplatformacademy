import React from 'react';
import './CustomCard.css';
import { Link } from 'react-router-dom';



const CustomCard = ( {title, description, image, navigatingLink} ) => {
    return(
        <>
            <div className="app__customcard flex__center">
                <div className="app__customcard-image">
                    <img src={image} alt={title + " Image"} />
                </div>
                <div className="app__customcard-info">
                    <h3 className="app__customcard-info-title p__heading">
                        {title}
                    </h3>
                    <p className='app__customcard-info-description p__paragraph'>
                        {description}
                    </p>
                    <Link to={navigatingLink} className="app__customcard-info-contactus">
                                <button type='button'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CustomCard;
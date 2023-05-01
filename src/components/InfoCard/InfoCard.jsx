import React from 'react';
import './InfoCard.css';
import { Link } from 'react-router-dom';



const InfoCard = ( {title, description, image, navigatingLink} ) => {
    return(
        <>
            <div className="app__infocard flex__center">
                <div className="app__infocard-info">
                    <h3 className="app__infocard-info-title p__heading">
                        {title}
                    </h3>
                    <ul className='app__infocard-info-description'>
                        {
                            description.map( (desc) => <li className='p__paragraph'>{desc}</li>)
                        }
                    </ul>
                    <Link to={navigatingLink} className="app__infocard-info-register">
                                <button type='button'>Register Now</button>
                    </Link>
                </div>
                <div className="app__infocard-image">
                    <img src={image} alt={title + " Image"} />
                </div>
            </div>
        </>
    );
};

export default InfoCard;
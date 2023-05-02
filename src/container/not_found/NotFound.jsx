import React from 'react';
import './NotFound.css';
import { images } from '../../constants';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <>
            <div className="app__notfound section__padding flex__center">
                
                <div className="vector__illustration_left">
                    <img src={images.NotFoundVector_Left} alt="Vector Illustration" />
                </div>
                <div className="vector__illustration_right">
                    <img src={images.NotFoundVector_Right} alt="Vector Illustration" />
                </div>

                <div className="app__notfound-illustration">
                    <img src={images.FatalError} alt="Page under construction illustration" />
                </div>

                <h3 className="app__notfound-heading p__large">
                    OOPS!
                </h3>

                <p className="app__notfound-subheading p__heading">
                    Error 404: Page Not Found
                </p>

                <Link to="/" className="app__notfound-button">
                    <button className='flex__center' type='button'>Back To Homepage</button>
                </Link>

            </div>
        </>
    );
};

export default NotFound;

import React from 'react';
import './NotFound.css';
import { images } from '../../constants';

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

                <p className="app__notfound-subheading p__subheading">
                    Error 404: Page Not Found
                </p>

                <a href="#" className="app__notfound-button">
                    <button className='flex__center' type='button'>Back To Homepage</button>
                </a>

            </div>
        </>
    );
};

export default NotFound;
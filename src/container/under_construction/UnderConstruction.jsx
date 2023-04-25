import React from 'react';
import './UnderConstruction.css';
import { images } from '../../constants';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
    return(
        <>
            <div className="app__underconstruction flex__center section__padding">

                <div className="vector__illustration_left">
                    <img src={images.ConstructionVector_Left} alt="Vector Illustration" />
                </div>
                <div className="vector__illustration_right">
                    <img src={images.ConstructionVector_Right} alt="Vector Illustration" />
                </div>

                <div className="app__underconstruction-illustration">
                    <img src={images.PageUnderConstruction} alt="Page under construction illustration" />
                </div>

                <h3 className="app__underconstruction-heading p__subheading">
                    Site is under construction! This feature will be available soon.
                </h3>

                <Link to="/" className="app__underconstruction-button">
                    <button className='flex__center' type='button'>Back To Homepage</button>
                </Link>

            </div>
        </>
    );
};

export default UnderConstruction;
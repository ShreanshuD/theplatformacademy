import React from 'react';
import './Presence.css';
import { CityList } from '../../constants';
import { images } from '../../constants';

const Presence = () => {
    return(
        <>
            <div className="app__presence section__padding flex__center">

                {
                    window.innerWidth <= 1460 &&

                    <h3 className="app__presence_information-title p__heading">
                        Our Presence
                    </h3>
                }

                <div className="app__presence_information">
                    {
                        window.innerWidth > 1460 &&

                        <h3 className="app__presence_information-title p__heading">
                            Our Presence
                        </h3>
                    }
                    <p className="p__subheading">
                        We are located in 6 major IT hubs of India
                    </p>
                    <ul className="app__presence_information-cities">
                        {
                            CityList.map( (city, idx) => <li className='app__presence_information-cities_listitem p__subheading' key={"City " + idx}>{city}</li>)
                        }
                    </ul>
                </div>

                <div className="app__presence_map flex__center">
                    <img src={images.IndiaMap} alt="Map of India" />
                </div>

            </div>
        </>
    );
};

export default Presence;
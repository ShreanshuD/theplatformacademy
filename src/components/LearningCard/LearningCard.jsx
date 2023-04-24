import React from 'react';
import './LearningCard.css';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const LearningCard = ( {title, illustration, description, navigatinglink} ) => {
    return(
        <>
            <div className="app__learningcard">
                <div className="app__learningcard_informationcontainer">
                    <div className="app__learningcard_illustration">
                        <img src={illustration} alt={title + " Illustration"} />
                    </div>
                    <div className="app__learningcard_information">
                        <p className="app__learningcard_information-title p__subheading">
                            {title}
                        </p>
                        <p className="app__learningcard_information-description p__paragraph">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="app__learningcard_navigation">
                    <a href={navigatinglink} className="app__learningcard_navigation-navigatinglink">
                        <button type='button' className='flex__center p__paragraph'>Learn More <MdOutlineKeyboardArrowDown className='dropdown_arrow' /></button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default LearningCard;
import React from 'react';
import './IllustrationCard.css';

const IllustrationCard = ( {title, illustration} ) => {
    return(
        <>
            <div className="app__illustrationcard flex__center">
                <div className="app__illustrationcard_illustration">
                    <img src={illustration} alt={title + " Illustration"} />
                </div>
                <p className="app__illustrationcard_title p__paragraph">{title}</p>
            </div>
        </>
    );
};

export default IllustrationCard;
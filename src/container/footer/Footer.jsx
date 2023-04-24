import React from 'react';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => {
    return(
        <>
            <div className="app__footer section__padding flex__center">

                <div className="app__footer_content flex__center">

                    <div className="app__footer_content-credentials">

                        <a href='#' className="app__footer_content-credentials-company flex__center">
                            <div className="app__footer_content-credentials-company_logo">
                                <img src={images.TPALogo} alt="The Platform Academy Logo" />
                            </div>
                            <p className="p__subheading">The Platform Academy</p>
                        </a>

                        <div className="app__footer_content-credentials-socialmedia flex__center">
                            <a href="https://www.facebook.com/" target="_blank" className="app__footer_content-credentials-socialmedia_facebook">
                                <img src={images.FacebookIcon} alt="FaceBook logo" />
                            </a>
                            <a href="https://twitter.com/" target="_blank" className="app__footer_content-credentials-socialmedia_facebook">
                                <img src={images.TwitterIcon} alt="Twitter logo" />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" className="app__footer_content-credentials-socialmedia_facebook">
                                <img src={images.LinkedInIcon} alt="LinkedIn logo" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="app__footer_content-credentials-socialmedia_facebook">
                                <img src={images.InstagramIcon} alt="Instagram logo" />
                            </a>
                        </div>
                        
                    </div>

                    <div className="app__footer_content-tpa">
                        <p className="p__subheading">The Platform Academy</p>
                        <a href="#" className="p__paragraph">Careers</a>
                        <a href="#" className="p__paragraph">For Learners</a>
                        <a href="#" className="p__paragraph">For Social Integrators</a>
                        <a href="#" className="p__paragraph">For Educational Institutes</a>
                        <a href="#" className="p__paragraph">Courses</a>
                        <a href="#" className="p__paragraph">Events</a>
                    </div>

                    <div className="app__footer_content-more">
                        <p className="p__subheading">More</p>
                        <a href="#" className="p__paragraph">Press</a>
                        <a href="#" className="p__paragraph">Terms</a>
                        <a href="#" className="p__paragraph">Privacy</a>
                        <a href="#" className="p__paragraph">Help</a>
                        <a href="#" className="p__paragraph">Contact</a>
                    </div>

                    <div className="app__footer_content-contact">
                        <p className="p__subheading">Contact Us</p>
                        <a href="#" className="p__paragraph">Contact Page</a>
                    </div>

                </div>

                <div className="horizontal__partition"></div>

                <div className="app__footer_credits p__paragraph">
                    2023 The Platform Academy
                </div>
            </div>
        </>
    );
};

export default Footer;

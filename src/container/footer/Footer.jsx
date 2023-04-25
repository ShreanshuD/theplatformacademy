import React from 'react';
import './Footer.css';
import { images } from '../../constants';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <>
            <div className="app__footer section__padding flex__center">

                <div className="app__footer_content flex__center">

                    <div className="app__footer_content-credentials">

                        <Link to='/' className="app__footer_content-credentials-company flex__center">
                            <div className="app__footer_content-credentials-company_logo">
                                <img src={images.TPALogo} alt="The Platform Academy Logo" />
                            </div>
                            <p className="p__subheading">The Platform Academy</p>
                        </Link>

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
                        <Link to="/underconstruction" className="p__paragraph">Careers</Link>
                        <Link to="/underconstruction" className="p__paragraph">For Learners</Link>
                        <Link to="/underconstruction" className="p__paragraph">For Social Integrators</Link>
                        <Link to="/underconstruction" className="p__paragraph">For Educational Institutes</Link>
                        <Link to="/courses" className="p__paragraph">Courses</Link>
                        <Link to="/underconstruction" className="p__paragraph">Events</Link>
                    </div>

                    <div className="app__footer_content-more">
                        <p className="p__subheading">More</p>
                        <Link to="/underconstruction" className="p__paragraph">Press</Link>
                        <Link to="/underconstruction" className="p__paragraph">Terms</Link>
                        <Link to="/underconstruction" className="p__paragraph">Privacy</Link>
                        <Link to="/underconstruction" className="p__paragraph">Help</Link>
                        <Link to="/underconstruction" className="p__paragraph">Contact</Link>
                    </div>

                    <div className="app__footer_content-contact">
                        <p className="p__subheading">Contact Us</p>
                        <Link to="/underconstruction" className="p__paragraph">Contact Page</Link>
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

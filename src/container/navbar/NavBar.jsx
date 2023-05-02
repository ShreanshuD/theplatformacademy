import React, { useState } from 'react';
import './NavBar.css';
import { images } from '../../constants/index.js';
import { BiSearchAlt2 } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdOutlineClose } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const [registrationPopUp, setRegistrationPopUp] = useState(true);

    const location = useLocation();

    const [navigation, setNavigation] = useState( {aboutUs: false, whyUs: false} );

    const ChangeDropDown = (navigationType, value) => {
        setNavigation( (previous) => { return{...previous, [navigationType]: value} });
    }

    const [menuOverlay, setMenuOverlay] = useState(false);

    return (
        <>
            <div className="app__navbar_container">
                {
                    registrationPopUp && location.pathname === "/" &&

                    <div className="app__registrationpopup">

                        <div className="app__registrationpopup-info flex__center">
                            <p className="p__paragraph">
                                Register for SL EduSeries - ETL & Integration Job Seminar
                            </p>
                            <Link to="/event" className="app__registrationpopup-info-button" onClick={ () => setRegistrationPopUp(false) }>
                                <button className='flex__center' type='button'>Register</button>
                            </Link>
                        </div>

                        <div className="app__registrationpopup-close flex__center" onClick={ () => setRegistrationPopUp(false) }>
                            <MdOutlineClose />
                        </div>

                    </div>
                }

                <div className="app__navbar" id="navbar">

                    <Link to='/' className="app__navbar_title" onClick={ () => window.scrollTo(0, 0) }>
                        <div className="app__navbar_title-logo">
                            <img src={images.ThePlatformAcademyLogo} alt="The Platform Academy Logo" />
                        </div>
                    </Link>

                    {
                        window.innerWidth > 1150 ?
                        <div className="app__navbar_navigations flex__center">
                            <div className="app__searchbar">
                                <input type="text" placeholder='Search'/>
                                <BiSearchAlt2 className='search__icon' />
                            </div>
                            <Link to='/courses' className="app__navbar_navigations-menu">
                                <p className="p__navigation flex__center">
                                    Courses
                                </p>
                            </Link>
                            <Link className={navigation.aboutUs ? "app__navbar_navigations-menu shift__down_aboutUs" : "app__navbar_navigations-menu"} onMouseEnter={ () => ChangeDropDown('aboutUs', true) } onMouseLeave={ () => ChangeDropDown('aboutUs', false) }>
                                <p className="p__navigation flex__center">
                                    About Us
                                    {
                                        navigation.aboutUs
                                        ?
                                        <MdOutlineKeyboardArrowUp className='dropdown_arrow' />
                                        :
                                        <MdOutlineKeyboardArrowDown className='dropdown_arrow' />
                                    }
                                </p>

                                {
                                    navigation.aboutUs &&

                                    <>
                                        <p className="p__navigation_small flex__center">
                                            <Link to='/event' className='p__navigation_small'>Events</Link>
                                        </p>
                                        <p className="p__navigation_small flex__center">
                                            <Link to='/contactus' className='p__navigation_small'>Contact Us</Link>
                                        </p>
                                        <p className="p__navigation_small flex__center">
                                            <Link to='/underconstruction' className='p__navigation_small'>In News</Link>
                                        </p>
                                        <p className="p__navigation_small flex__center">
                                            <Link to='/underconstruction' className='p__navigation_small'>Blogs</Link>
                                        </p>
                                    </>
                                }
                            </Link>
                            <Link className={navigation.whyUs ? "app__navbar_navigations-menu shift__down_whyUs" : "app__navbar_navigations-menu"} onMouseEnter={ () => ChangeDropDown('whyUs', true) } onMouseLeave={ () => ChangeDropDown('whyUs', false) }>
                                <p className="p__navigation flex__center">
                                    Why Us
                                    {
                                        navigation.whyUs
                                        ?
                                        <MdOutlineKeyboardArrowUp className='dropdown_arrow' />
                                        :
                                        <MdOutlineKeyboardArrowDown className='dropdown_arrow' />
                                    }
                                </p>

                                {
                                    navigation.whyUs &&
                                    
                                    <>
                                        <p className="p__navigation_small flex__center">
                                            <Link to='/learners' className='p__navigation_small'>For Learners</Link>
                                        </p>
                                        <p className="p__navigation_small flex__center">
                                            <Link to='/systemintegrators' className='p__navigation_small'>For System Integrators</Link>
                                        </p>
                                        <p className="p__navigation_small flex__center">
                                            <Link to='/educationalinstitutions' className='p__navigation_small'>For Educational Institutes</Link>
                                        </p>
                                    </>
                                }
                            </Link>
                            <Link to='/underconstruction' className='app__navbar_navigation-button'>
                                <button className='nav__button'>Login</button>
                            </Link>
                        </div>
                        :
                        <div className="app__navbar_navigations-small flex__center" onClick={ () => setMenuOverlay(true) }>
                            <GiHamburgerMenu className='hamburger' />
                        </div>
                    }

                </div>

                <div className={menuOverlay ? "app__navbar_overlay flex__center" : "app__navbar_overlayclose flex__center"}>
                    <div className="app__navbar_overlay-close flex__center" onClick={ () => setMenuOverlay(false) }>
                        <MdOutlineClose />
                    </div>
                    <div className="app__navbar_overlay-navigations flex__center">
                        <Link to='/courses' className="app__navbar_navigations-menu" onClick={ () => setMenuOverlay(false) }>
                            <p className="p__navigation flex__center">
                                <Link to='/courses' className='p__navigation'>Courses</Link>
                            </p>
                        </Link>
                        <Link to='/underconstruction' className="app__navbar_navigations-menu" onClick={ () => setMenuOverlay(false) }>
                            <p className="p__navigation flex__center">
                                About Us
                            </p>
                        </Link>
                        <Link to='/underconstruction' className="app__navbar_navigations-menu" onClick={ () => setMenuOverlay(false) }>
                            <p className="p__navigation flex__center">
                                Why Us
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;
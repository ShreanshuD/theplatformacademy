import React, { useState } from 'react';
import './NavBar.css';
import { images } from '../../constants/index.js';
// import { BiSearchAlt2 } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdClose } from 'react-icons/md';
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
                            <MdClose />
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
                        <div className="app__navbar_navigation flex__center">
                            {/* <div className="app__searchbar">
                                <input type="text" placeholder='Search'/>
                                <BiSearchAlt2 className='search__icon' />
                            </div> */}
                            <div className="app__navbar_navigation-links flex__center">
                                <Link to='/courses' className="app__navbar_navigation-menu">
                                    <p className="p__navigation flex__center">
                                        Courses
                                    </p>
                                </Link>
                                <Link className={navigation.aboutUs ? "app__navbar_navigation-menu shift__down_aboutUs" : "app__navbar_navigation-menu"} onClick={ () => ChangeDropDown('aboutUs', !navigation.aboutUs) } onMouseLeave={ () => ChangeDropDown('aboutUs', false) }>
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
                                                <Link to='/sledu-series' className='p__navigation_small'>Events</Link>
                                            </p>
                                            <p className="p__navigation_small flex__center">
                                                <Link to='/contact-us' className='p__navigation_small'>Contact Us</Link>
                                            </p>
                                            <p className="p__navigation_small flex__center">
                                                <Link to='/under-construction' className='p__navigation_small'>In News</Link>
                                            </p>
                                            <p className="p__navigation_small flex__center">
                                                <Link to='/under-construction' className='p__navigation_small'>Blogs</Link>
                                            </p>
                                        </>
                                    }
                                </Link>
                                <Link className={navigation.whyUs ? "app__navbar_navigation-menu shift__down_whyUs" : "app__navbar_navigation-menu"} onClick={ () => ChangeDropDown('whyUs', !navigation.whyUs) } onMouseLeave={ () => ChangeDropDown('whyUs', false) }>
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
                                                <Link to='/system-integrators' className='p__navigation_small'>For System Integrators</Link>
                                            </p>
                                            <p className="p__navigation_small flex__center">
                                                <Link to='/educational-institutes' className='p__navigation_small'>For Educational Institutes</Link>
                                            </p>
                                        </>
                                    }
                                </Link>
                            </div>
                            <Link to='/under-construction' className='app__navbar_navigation-button'>
                                <button className='nav__button'>Login</button>
                            </Link>
                        </div>
                        :
                        <div className="app__navbar_navigation-small flex__center" onClick={ () => {setMenuOverlay(!menuOverlay); ChangeDropDown('whyUs', false); ChangeDropDown('aboutUs', false) } }>
                            { menuOverlay ? <MdClose className='hamburger app__navbar_overlay-close' /> : <GiHamburgerMenu className='hamburger' /> }
                        </div>
                    }

                </div>

                <div className={menuOverlay ? "app__navbar_overlay flex__center" : "app__navbar_overlayclose flex__center"}>
                    <div className="app__navbar_overlay-navigation flex__center">
                        <Link to='/courses' className="app__navbar_navigation-menu" onClick={ () => setMenuOverlay(false) }>
                            <p className="p__navigation flex__center">
                                Courses
                            </p>
                        </Link>
                        <Link to='' className="app__navbar_navigation-menu" onClick={ () => { ChangeDropDown('aboutUs', !navigation.aboutUs); ChangeDropDown('whyUs', false) } }>
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
                                    <p className="app__navigation_menu-smalldevices flex__center">
                                        <Link to='/sledu-series' className='p__navigation_small'>Events</Link>
                                    </p>
                                    <p className="app__navigation_menu-smalldevices flex__center">
                                        <Link to='/contact-us' className='p__navigation_small'>Contact Us</Link>
                                    </p>
                                    <p className="app__navigation_menu-smalldevices flex__center">
                                        <Link to='/under-construction' className='p__navigation_small'>In News</Link>
                                    </p>
                                    <p className="app__navigation_menu-smalldevices flex__center">
                                        <Link to='/under-construction' className='p__navigation_small'>Blogs</Link>
                                    </p>
                                </>
                            }
                        </Link>
                        <Link to='' className="app__navbar_navigation-menu" onClick={ () => { ChangeDropDown('whyUs', !navigation.whyUs); ChangeDropDown('aboutUs', false) } }>
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
                                    <p className="app__navigation_menu-smalldevices flex__center">
                                        <Link to='/learners' className='p__navigation_small'>For Learners</Link>
                                    </p>
                                    <p className="app__navigation_menu-smalldevices flex__center">
                                        <Link to='/system-integrators' className='p__navigation_small'>For System Integrators</Link>
                                    </p>
                                    <p className="app__navigation_menu-smalldevices flex__center">
                                        <Link to='/educational-institutes' className='p__navigation_small'>For Educational Institutes</Link>
                                    </p>
                                </>
                            }
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;

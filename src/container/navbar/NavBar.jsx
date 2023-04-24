import React, { useState } from 'react';
import './NavBar.css';
import { images } from '../../constants/index.js';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

const NavBar = () => {
    const [navigation, setNavigation] = useState( {aboutUs: false, whyUs: false} );

    const ChangeDropDown = (navigationType, value) => {
        setNavigation( (previous) => { return{...previous, [navigationType]: value} });
    }

    return (
        <>
            <div className="app__navbar" id="navbar">

                <a href='#' className="app__navbar_title">
                    <div className="app__navbar_title-logo">
                        <img src={images.TPALogo} alt="The Platform Academy Logo" />
                    </div>
                    <h1 className="app__navbar_title-name p__semibold">
                        The Platform Academy
                    </h1>
                </a>

                <div className="app__navbar_navigations flex__center">
                    <div className="app__searchbar">
                        <input type="text" placeholder='Search'/>
                        <BiSearchAlt2 className='search__icon' />
                    </div>
                    <a href='#' className="app__navbar_navigations-menu">
                        <p className="p__navigation flex__center">
                            Courses
                        </p>
                    </a>
                    <a href='#' className={navigation.aboutUs ? "app__navbar_navigations-menu shift__down_aboutUs" : "app__navbar_navigations-menu"} onMouseEnter={ () => ChangeDropDown('aboutUs', true) } onMouseLeave={ () => ChangeDropDown('aboutUs', false) }>
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
                                <p className="p__navigation flex__center">
                                    Events
                                </p>
                                <p className="p__navigation flex__center">
                                    Contact Us
                                </p>
                                <p className="p__navigation flex__center">
                                    In News
                                </p>
                                <p className="p__navigation flex__center">
                                    Blogs
                                </p>
                            </>
                        }
                    </a>
                    <a href='#' className={navigation.whyUs ? "app__navbar_navigations-menu shift__down_whyUs" : "app__navbar_navigations-menu"} onMouseEnter={ () => ChangeDropDown('whyUs', true) } onMouseLeave={ () => ChangeDropDown('whyUs', false) }>
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
                                <p className="p__navigation flex__center">
                                    For Learners
                                </p>
                                <p className="p__navigation flex__center">
                                    For System Integrators
                                </p>
                                <p className="p__navigation flex__center">
                                    For Educational Institutes
                                </p>
                            </>
                        }
                    </a>
                    <a href='#' className='app__navbar_navigation-button'>
                        <button className='nav__button'>Login</button>
                    </a>
                </div>

            </div>
        </>
    )
}

export default NavBar;
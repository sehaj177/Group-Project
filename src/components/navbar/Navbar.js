import React, { useState } from 'react'

import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { TiWeatherPartlySunny, TiWeatherSunny } from 'react-icons/ti'

import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    
    return (
        <div name='home' className={'navbar navbar-bg'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h1>Voyager.</h1>
            </div>
            <ul className="nav-menu">
                <Link to='hero' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
          
                <Link to='search' smooth={true} duration={500} ><li>Book</li></Link>
                <Link to='views' smooth={true} duration={500} ><li>Views</li></Link>
                <a href='\about.html' target={"_blank"}  ><li>About Us</li></a>
                <Link to='footer' smooth={true} duration={500} ><li>Contact Us</li></Link>
           
            </ul>
            <div className="nav-icons" > 
            <Link  to="weatherApp" smooth={true} duration={500}>   <TiWeatherPartlySunny className='icon' style={{ marginRight: '1rem',fontSize: 'relative' }} /> </Link>
                 
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: 'white' }} className='icon' />)}

            </div>
            
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <Link to='hero' aria-current="page"smooth={true} duration={500}  ><li>Home</li></Link>
                    <Link to='destinations'smooth={true} duration={500}  ><li>Destinations</li></Link>
                    
                    <Link to='search'smooth={true} duration={500}  ><li>Book</li></Link>
                    <Link to='views'smooth={true} duration={500}  ><li>Views</li></Link>
                    <a href='\about.html' target={"_blank"} ><li>About Us</li></a>
                    <Link to='weatherApp' smooth={true} duration={500} ><li>Check Weather</li></Link>
                    <Link to='footer' smooth={true} duration={500} ><li>Contact Us</li></Link>
                    

                </ul>
                <div className="mobile-menu-bottom">

                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar

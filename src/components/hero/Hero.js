import React from 'react'
import './HeroStyles.css'
import { AiOutlineSearch } from 'react-icons/ai'
// import hotelVideo from '../../assets/hotelVideo.mp4'
//  import Video from '../../assets/maldivesVideo.mp4'
import gif from '../../assets/gif2.gif'

function Hero() {

    return (
        <div name='hero' className='hero'>
            <img id='video' src={gif} alt="loading..." />
            <div className="overlay"></div>
            <div className="content">
                <h1>First Class Travel</h1>
                <h2>Top 1% Locations IN NORTH INDIA</h2>
               
            </div>
        </div>
    )
}

export default Hero

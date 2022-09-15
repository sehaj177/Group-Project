import React from 'react'
import './DestinationsStyles.css'

import Punjab from '../../assets/punjab.jpg'
import Chandigarh from '../../assets/chandi.jpg'
import Delhi from '../../assets/delhi.jpg'
import UttarPradesh from '../../assets/up.jfif'
import Rajasthan from '../../assets/raj.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>Tourist Attractions</h1>
                <p>Best of the North India  </p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={Punjab} alt="/"/>
                    <img src={Chandigarh} alt="/"/>
                    <img src={Delhi} alt="/"/>
                    <img src={UttarPradesh} alt="/"/>
                    <img src={Rajasthan} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations

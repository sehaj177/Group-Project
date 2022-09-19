import React from 'react'
import './SelectsStyles.css'

import Punjab from '../../assets/punjab.jpg'
import Chandigarh from '../../assets/chandi.jpg'
import Delhi from '../../assets/delhi.jpg'
import UttarPradesh from '../../assets/up.jfif'
import Uttarakhand from '../../assets/uk.jfif'
import Rajasthan from '../../assets/raj.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container '>
                <SelectsImg className="ImgHover" bgImg={Punjab} text='Punjab'  />
                <SelectsImg className="ImgHover" bgImg={Chandigarh} text='Chandigarh' />
                <SelectsImg className="ImgHover" bgImg={Delhi} text='Delhi' />
                <SelectsImg className="ImgHover" bgImg={UttarPradesh} text='Uttar Pradesh' />
                <SelectsImg className="ImgHover" bgImg={Uttarakhand} text='Uttarakhand' />
                <SelectsImg className="ImgHover" bgImg={Rajasthan} text='Rajasthan' />
            </div>

        </div>
    )
}

export default Selects

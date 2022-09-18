import React from "react";
import styles from './HotelData.module.css'
import Card from './Card/Card.js'

function HotelData() {
    console.log("Rendering Hotel data")
    return(
        <div className={styles.Container}>
            <Card></Card>
        </div>
    )
}

export default HotelData;

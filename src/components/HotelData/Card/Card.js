import React from "react";
import styles from './Card.module.css'

const Card = () => {
    return (
        <div className={styles.Container}>
            <img className={styles.hotelImage}></img>
            <p>Hotel</p>
            <p>Chandigarh</p>
        </div>
    )
}

export default Card;
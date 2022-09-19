import React from "react";
import styles from './Card.module.css'

const Card = (props) => {
    return (
        <div className={styles.Container}>
            <img className={styles.hotelImage} src=""></img>
            <p>Name - Hotel {props.hotelName}</p>
            <p>Address - {props.name}</p>
        </div>
    )
}

export default Card;
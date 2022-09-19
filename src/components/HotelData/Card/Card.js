import React from "react";
import styles from './Card.module.css'

const Card = (props) => {
    return (
        <div className={styles.Container}>
            <img className={styles.hotelImage} src="https://i.pinimg.com/originals/f0/12/f9/f012f9e7ed92845bff797bc25a11a769.jpg"></img>
            <p>Name - Hotel {props.hotelName}</p>
            <p>Address - {props.name}</p>
        </div>
    )
}

export default Card;
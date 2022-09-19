import React from "react";
import styles from "./HotelData.module.css";
import Card from "./Card/Card.js";
import axios from "axios";

function HotelData(props) {
  console.log("Rendering Hotel data");
  return (
    <>
      <h1 style={{textAlign:"center"}}>{props.name}</h1>
      <div className={styles.Container}>
        {[...Array(8)].map((_, ind) => {
          return <Card key={ind} name={props.name} hotelName={ind+1}></Card>;
        })}
      </div>
    </>
  );
}

export default HotelData;

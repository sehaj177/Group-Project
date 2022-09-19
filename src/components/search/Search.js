import React from "react";
import "./SearchStyles.css";
import { useState } from "react";

import Gold from "../../assets/gold.png";

function Search(props) {
  const handleClick = (e)=> {
    e.preventDefault();
    props.displayHotelData(!props.visibility);
  };

  const packPopoUp=()=>{
    console.log("popup");
    alert("Will be available soon..");
  }

  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>LUXURY INCLUDED VACATIONS </h2>
          <p>
            Come experience the very pinnacle of luxury North India
            all-inclusive vacations for all at Resorts. Our luxury beach
            resorts, set along the most gorgeous tropical settings and exquisite
            beaches in Rajasthan feature unlimited gourmet dining, unique bars
            serving premium liquors and wines, and every land and water sport,
            including complimentary green fees at our golf resorts . If you are
            planning a wedding, Rajasthan is the leader in North India
            destination weddings and honeymoon packages.
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={Gold} alt="/" style={{ marginRight: "1rem" }} />
              </div>
              <div>
                <h3>North India's LEADING</h3>
                <p>ALL-INCLUSIVE COMPANY </p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>NO ONE INCLUDES MORE PACKAGES</h3>
                <p>ALL-INCLUSIVE COMPANY </p>
                <button  onClick={packPopoUp}>View Packages</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <form>
            <div className="input-wrap">
              <label>Destination</label>
              <select onChange={(e) => props.setSelectedLocation(e.target.value)}>
                <option value="1">New Delhi</option>
                <option value="2">Punjab</option>
                <option value="3">Chandigarh</option>
                <option value="4">Uttar Pradesh</option>
                <option value="5">Uttarakhand</option>
                <option value="6">Rajasthan</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>
            <button onClick={handleClick}>Hotel Availabilities </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;

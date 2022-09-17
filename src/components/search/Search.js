import React from 'react'
import './SearchStyles.css'
import { useState } from 'react'

import Gold from '../../assets/gold.png'

function Search() {


    const handleClick = async (e) => {
        e.preventDefault();
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7602777b8bmshd5fae124a5f2a53p166bc4jsnd9fb5f0c5f63',
                'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
            }
        };

        fetch('https://hotels4.p.rapidapi.com/locations/v2/search?query=new%20york&locale=en_US&currency=INR', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

        const photos = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7602777b8bmshd5fae124a5f2a53p166bc4jsnd9fb5f0c5f63',
                'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
            }
        };

        fetch('https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    };


    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>LUXURY INCLUDED VACATIONS </h2>
                    <p>Come experience the very pinnacle of luxury North India all-inclusive vacations for all at  Resorts. Our luxury beach resorts, set along the most gorgeous tropical settings and exquisite beaches in Rajasthan feature unlimited gourmet dining, unique bars serving premium liquors and wines, and every land and water sport, including complimentary green fees at our golf resorts . If you are planning a wedding, Rajasthan is the leader in North India destination weddings and honeymoon packages.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>WORLD'S LEADING</h3>
                                <p>ALL-INCLUSIVE COMPANY </p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NO ONE INCLUDES MORE PACKAGES</h3>
                                <p>ALL-INCLUSIVE COMPANY </p>
                                <button>View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">

                    <form>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                                <option value="1">New Delhi</option>
                                <option value="1">Punjab</option>
                                <option value="1">Chandigarh</option>
                                <option value="1">Uttar Pradesh</option>
                                <option value="1">Uttarakhand</option>
                                <option value="1">Rajasthan</option>

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
                        <button onClick={handleClick}>Rates & Availabilities </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Search

import React, { useState } from 'react'
import axios from 'axios'
import './Weather.css'

import {WiDayShowers} from 'react-icons/wi'


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="weatherApp">
      <div className="search " style={{justifyItems:'center'} }>
      
          <h2>Check the weather of your desired locations.  <WiDayShowers fontSize={'2.5rem'} /></h2>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
           />

      </div>
      <div className="containerr" >
        <div className="topp">
          <div className="location">
            <h3>{data.name}</h3>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <h3>{data.weather[0].main}</h3> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="base">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
            <div className="temp_min">
              {data.main ? <p className='bold'>{data.main.temp_min.toFixed()+'/'+data.main.temp_max.toFixed()} °C</p> : null}
              <p>Min/Max Temprature</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default App;
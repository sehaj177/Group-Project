import React, { useState } from 'react'

import Destinations from './components/destinations/Destinations'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import Weather from './components/Weather/Weather'
import HotelData from './components/HotelData/HotelData'
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [isVisible, showdata] = useState(false);

  const displayHoteldata = (flag)=>{
    if(flag)
      return <HotelData></HotelData>
    else
      return <div></div>
  }

  return (
    <div>

    <Navbar />
      <BrowserRouter>
        <Hero />
        <Destinations />
        {/* <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/destinations" element={<Destinations />} />
            <Route exact path="/selects" element={<Selects />} />
        </Routes> */}
        <Search displayHotelData={showdata} />
        {displayHoteldata(isVisible)}
        <Selects />
        <br />
        {/* <ImgCarousel /> */}
        <Weather/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

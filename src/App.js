import React, { useState } from "react";

import Destinations from "./components/destinations/Destinations";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";
import Weather from "./components/Weather/Weather";
import HotelData from "./components/HotelData/HotelData";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

const locName = {
  1: "New Delhi",
  2: "Punjab",
  3: "Chandigarh",
  4: "Uttar Pradesh",
  5: "Uttarakhand",
  6: "Rajasthan",
};

function App() {
  const [isVisible, showdata] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(1);

  const displayHoteldata = (flag) => {
    if (flag) return <HotelData name={locName[selectedLocation]}></HotelData>;
    else return <div></div>;
  };

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
        <Search
          visibility={isVisible}
          displayHotelData={showdata}
          setSelectedLocation={setSelectedLocation}
        />
        {displayHoteldata(isVisible)}
        <Selects />
        <br />
        {/* <ImgCarousel /> */}
        <Weather />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

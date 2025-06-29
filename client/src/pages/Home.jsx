import React from 'react';
import './styles/Home.scss';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Destinations from '../components/Destinations.jsx';
import Acomodation from '../components/Acomodation.jsx';
import Services from '../components/Services.jsx';
import Memorable from '../components/Memorable.jsx';
import TopHotels from '../components/TopHotels.jsx';
const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <TopHotels/>
      <Destinations />
      <Acomodation />
      <Services />
      <Memorable />
    </>
  );
}

export default Home;

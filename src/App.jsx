import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyTypes from './components/PropertyTypes';
import WhyChooseUs from './components/WhyChooseUs';
import CitiesSection from './components/CitiesSection';
import FeaturedPlots from './components/FeaturedPlots';
import ResidentialPlots from './components/ResidentialPlots';
import CommercialPlots from './components/CommercialPlots';
import SellBuySection from './components/SellBuySection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <CitiesSection />
      <FeaturedPlots />
      <ResidentialPlots />
      <CommercialPlots />
      <SellBuySection />
      <Footer />
      {/* <PropertyTypes /> */}
    </div>
  );
};

export default App;

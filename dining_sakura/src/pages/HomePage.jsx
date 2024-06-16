import React from 'react';
import Header from '../components/Header';
import HeroImage from '../components/HeroImage';
import IntroductionSection from '../components/IntroductionSection';
import MenuSection from '../components/MenuSection';
import AboutUs from '../components/AboutUs';
import ReservationSection from '../components/ReservationSection';
import Footer from '../components/Footer';
import SocialMedia from '../components/SocialMedia';
import Gallery from '../components/Gallery';


const HomePage = () => {
  return (
    
    <div>
        <Header />
        <HeroImage />
        <IntroductionSection />
        <MenuSection />
        <AboutUs/>
        <Gallery />
        <ReservationSection />
        <SocialMedia />
        <Footer />  
     
    </div>
  );
}

export default HomePage;
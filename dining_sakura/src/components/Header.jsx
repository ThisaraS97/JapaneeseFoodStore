import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext'; 
import ContactUsPopup from './ContactUsPopup'; 
import './Header.css';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const { isDarkMode, toggleTheme, theme } = useTheme();
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactPopup(true);
  };

  const handleCloseContactPopup = () => {
    setShowContactPopup(false);
  };

  const handleMenuClick = (e) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleGalleryClick = (e) => {
    e.preventDefault();
    const gallerySection = document.getElementById('gallery');
    gallerySection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReservationClick = (e) => {
    e.preventDefault();
    const reservationSection = document.getElementById('reservation');
    reservationSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${isDarkMode ? 'dark' : 'light'} ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header__logo">
          <h1>食堂 桜</h1>
        </div>
        <nav className="header__nav">
          <ul>
            <li><a href="#menu" onClick={handleMenuClick}>{language === 'en' ? 'Menu' : 'メニュー'}</a></li>
            <li><a href="#about" onClick={handleAboutClick}>{language === 'en' ? 'About Us' : '私たちについて'}</a></li>
            <li><a href="#gallery" onClick={handleGalleryClick}>{language === 'en' ? 'Gallery' : 'ギャラリー'}</a></li>
            <li><a href="#reservation" onClick={handleReservationClick}>{language === 'en' ? 'Reservation' : '予約'}</a></li>
            <li><a href="#contact" onClick={handleContactClick}>{language === 'en' ? 'Contact' : 'お問い合わせ'}</a></li>
          </ul>
        </nav>
        <div className="header__controls">
          <button 
            className="header__theme-toggle" 
            onClick={toggleTheme} 
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <div className="header__language">
            <button 
              className={language === 'en' ? 'active' : ''} 
              onClick={() => handleLanguageChange('en')}
            >
              English
            </button>
            <button 
              className={language === 'ja' ? 'active' : ''} 
              onClick={() => handleLanguageChange('ja')}
            >
              日本語
            </button>
          </div>
        </div>
      </div>
      {showContactPopup && <ContactUsPopup onClose={handleCloseContactPopup} />}
    </header>
  );
};

export default Header;

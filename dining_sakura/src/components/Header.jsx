import React from 'react';
import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext'; // Import useTheme hook
import ContactUsPopup from './ContactUsPopup'; // Import ContactUsPopup component
import './Header.css';

const Header = () => {
  const { language, setLanguage } = useLanguage(); // Access the selected language and language setter
  const { isDarkMode, toggleTheme } = useTheme(); // Access the current theme and theme toggle function
  const [showContactPopup, setShowContactPopup] = React.useState(false); // State to control the display of the Contact Us popup

  const handleLanguageChange = (lang) => {
    setLanguage(lang); // Call the language setter with the selected language
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    setShowContactPopup(true); // Set showContactPopup to true to display the Contact Us popup
  };

  const handleCloseContactPopup = () => {
    setShowContactPopup(false); // Set showContactPopup to false to hide the Contact Us popup
  };

  const handleMenuClick = (e) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <header className={`header ${isDarkMode ? 'dark' : 'light'}`}> {/* Apply theme-dependent class */}
      <div className="container">
        <div className="header__logo">
          <h1>食堂桜</h1>
        </div>
        <nav className="header__nav">
          <ul>
            <li><a href="#menu" onclick={handleMenuClick}>{language === 'en' ? 'Menu' : 'メニュー'}</a></li>
            <li><a href="#about" onClick={handleAboutClick}>{language === 'en' ? 'About Us' : '私たちについて'}</a></li>
            <li><a href="#contact" onClick={handleContactClick}>{language === 'en' ? 'Contact' : 'お問い合わせ'}</a></li>
          </ul>
        </nav>
        <div className="header__language">
          <button onClick={() => handleLanguageChange('en')}>English</button>
          <button onClick={() => handleLanguageChange('ja')}>日本語</button>
        </div>
      </div>
      {showContactPopup && <ContactUsPopup onClose={handleCloseContactPopup} />} {/* Render ContactUsPopup if showContactPopup is true */}
    </header>
  );
};

export default Header;

import React from 'react';
import './Footer.css';
import { useLanguage } from '../LanguageContext';


const Footer = () => {
  const { language } = useLanguage(); // Access the selected language

  return (
    <footer className="footer">
      {language === 'en' && (
        <div className="container">
          <p className="footer__text">
            &copy; {new Date().getFullYear()} 食堂桜. All rights reserved.
          </p>
        </div>
      )}
       {language === 'ja' && (
        <div className="container">
          <p className="footer__text">
            &copy; {new Date().getFullYear()} 食堂桜. 無断転載を禁じます.
          </p>
        </div>
      )}
    </footer>
  );
};

export default Footer;

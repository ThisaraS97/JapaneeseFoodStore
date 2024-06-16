import React from 'react';
import { useLanguage } from '../LanguageContext';
import './HeroImage.css';

const HeroImage = () => {
  const { language } = useLanguage(); // Access the selected language

  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="container">
          {language === 'en' && (
            <>
              <h2 className="hero__title">Welcome to 食堂桜</h2>
              <p className="hero__subtitle">Experience the essence of Japanese cuisine</p>
            </>
          )}
          {language === 'ja' && (
            <>
              <h2 className="hero__title">食堂桜へようこそ</h2>
              <p className="hero__subtitle">日本料理の本質をご体験ください</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroImage;

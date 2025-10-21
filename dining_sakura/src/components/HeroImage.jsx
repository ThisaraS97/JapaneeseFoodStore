import React from 'react';
import { useLanguage } from '../LanguageContext';
// Removed unused import: useTheme
// import { useTheme } from '../ThemeContext';
import './HeroImage.css';

const HeroImage = () => {
  const { language } = useLanguage();
  // Removed unused variable: theme
  // const { theme } = useTheme();

  const handleScrollDown = () => {
    const introSection = document.getElementById('intro');
    introSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReservationClick = () => {
    const reservationSection = document.getElementById('reservation');
    reservationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero__overlay">
        <div className="hero__content">
          {language === 'en' ? (
            <>
              <h1 className="hero__title">Dining Sakura</h1>
              <p className="hero__subtitle">
                Experience authentic Japanese cuisine in a modern atmosphere. 
                Our chefs combine traditional techniques with contemporary presentation 
                for an unforgettable dining experience.
              </p>
              <div className="hero__cta">
                <button className="hero__button" onClick={handleReservationClick}>
                  Reserve a Table
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="hero__title">食堂 桜</h1>
              <p className="hero__subtitle">
                モダンな雰囲気の中で本格的な日本料理をご体験ください。
                私たちのシェフは、伝統的な技術と現代的な演出を組み合わせて、
                忘れられない食事体験を提供します。
              </p>
              <div className="hero__cta">
                <button className="hero__button" onClick={handleReservationClick}>
                  テーブルを予約する
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className="hero__scroll" onClick={handleScrollDown}>
        <span className="hero__scroll-text">{language === 'en' ? 'Discover More' : 'もっと見る'}</span>
        <div className="hero__scroll-icon"></div>
      </div>
    </section>
  );
};

export default HeroImage;

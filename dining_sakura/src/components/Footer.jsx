import React from 'react';
import './Footer.css';
import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext';

const Footer = () => {
  const { language, setLanguage } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer__grid">
          <div className="footer__col">
            <div className="footer__logo">
              <h2 className="footer__logo-text">食堂 桜</h2>
            </div>
            <p className="footer__description">
              {language === 'en' 
                ? 'Authentic Japanese cuisine in a modern atmosphere, blending tradition with contemporary culinary arts.'
                : '現代的な雰囲気の中で本格的な日本料理を、伝統と現代の料理技術を融合させて提供します。'}
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link">
                <span className="footer__social-icon">📱</span>
              </a>
              <a href="#" className="footer__social-link">
                <span className="footer__social-icon">📸</span>
              </a>
              <a href="#" className="footer__social-link">
                <span className="footer__social-icon">🐦</span>
              </a>
              <a href="#" className="footer__social-link">
                <span className="footer__social-icon">📺</span>
              </a>
            </div>
          </div>
          
          <div className="footer__col">
            <h3 className="footer__heading">{language === 'en' ? 'Quick Links' : 'クイックリンク'}</h3>
            <ul className="footer__links">
              <li><a href="#menu">{language === 'en' ? 'Our Menu' : 'お品書き'}</a></li>
              <li><a href="#about">{language === 'en' ? 'About Us' : '私たちについて'}</a></li>
              <li><a href="#gallery">{language === 'en' ? 'Gallery' : 'ギャラリー'}</a></li>
              <li><a href="#reservation">{language === 'en' ? 'Reservation' : '予約'}</a></li>
              <li><a href="#contact">{language === 'en' ? 'Contact' : 'お問い合わせ'}</a></li>
            </ul>
          </div>
          
          <div className="footer__col">
            <h3 className="footer__heading">{language === 'en' ? 'Contact Us' : 'お問い合わせ'}</h3>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <div>
                {language === 'en' 
                  ? '123 Sakura Street, Tokyo, Japan'
                  : '〒123-4567 東京都新宿区桜通り123'}
              </div>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📞</span>
              <div>+81 3-1234-5678</div>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">✉️</span>
              <div>info@diningsakura.jp</div>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">🕒</span>
              <div>
                {language === 'en'
                  ? 'Mon-Sun: 11:00 AM - 10:00 PM'
                  : '月〜日：11:00 - 22:00'}
              </div>
            </div>
          </div>
          
          <div className="footer__col">
            <h3 className="footer__heading">{language === 'en' ? 'Newsletter' : 'ニュースレター'}</h3>
            <p className="footer__description">
              {language === 'en'
                ? 'Subscribe to our newsletter for special offers and updates'
                : '特別オファーや最新情報を受け取るにはニュースレターにご登録ください'}
            </p>
            <div className="footer__newsletter">
              <div className="footer__form">
                <input 
                  type="email" 
                  className="footer__input" 
                  placeholder={language === 'en' ? 'Your email' : 'メールアドレス'} 
                />
                <button className="footer__button">
                  {language === 'en' ? 'Subscribe' : '登録'}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer__divider"></div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} 食堂桜 (Dining Sakura). {language === 'en' ? 'All rights reserved.' : '無断転載を禁じます。'}
          </p>
          <div className="footer__language-switch">
            <button 
              className={`footer__language-button ${language === 'en' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('en')}
            >
              English
            </button>
            <span>|</span>
            <button 
              className={`footer__language-button ${language === 'ja' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('ja')}
            >
              日本語
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

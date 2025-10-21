import React from 'react';
import { useLanguage } from '../LanguageContext';
// Removed unused import: useTheme 
// import { useTheme } from '../ThemeContext';
import './IntroductionSection.css';

const IntroductionSection = () => {
  const { language } = useLanguage();
  // Removed unused variable: theme
  // const { theme } = useTheme();

  return (
    <section className="introduction" id="intro">
      <div className="introduction__pattern"></div>
      <div className="introduction__container">
        <div className="introduction__text">
          {language === 'en' ? (
            <>
              <h2 className="introduction__title">Experience Japanese Cuisine</h2>
              <p className="introduction__subtitle">Where tradition meets innovation</p>
              <p className="introduction__description">
                Welcome to Dining Sakura, where traditional Japanese flavors meet modern culinary techniques. 
                Our menu features a variety of authentic Japanese dishes prepared with the finest 
                ingredients sourced locally and from Japan. Our chefs blend time-honored recipes with 
                contemporary presentation to create dishes that celebrate the essence of Japanese cuisine.
              </p>
              <div className="introduction__feature-list">
                <div className="introduction__feature">
                  <div className="introduction__feature-icon">🍱</div>
                  <div className="introduction__feature-text">Authentic Ingredients</div>
                </div>
                <div className="introduction__feature">
                  <div className="introduction__feature-icon">👨‍🍳</div>
                  <div className="introduction__feature-text">Master Chefs</div>
                </div>
                <div className="introduction__feature">
                  <div className="introduction__feature-icon">🥢</div>
                  <div className="introduction__feature-text">Traditional Techniques</div>
                </div>
                <div className="introduction__feature">
                  <div className="introduction__feature-icon">🍶</div>
                  <div className="introduction__feature-text">Premium Sake Selection</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="introduction__title">日本料理を体験する</h2>
              <p className="introduction__subtitle">伝統と革新が出会う場所</p>
              <p className="introduction__description">
                食堂桜へようこそ。伝統的な日本の味わいと現代の料理技術が融合する場所です。
                当店のメニューには、地元と日本から調達した最高級の食材を使用した様々な本格的な日本料理があります。
                私たちのシェフは、伝統的なレシピと現代的な盛り付けを組み合わせて、日本料理の真髄を称える料理を創り出します。
              </p>
              <div className="introduction__feature-list">
                <div className="introduction__feature">
                  <div className="introduction__feature-icon">🍱</div>
                  <div className="introduction__feature-text">本格的な食材</div>
                </div>
                <div className="introduction__feature">
                  <div className="introduction__feature-icon">👨‍🍳</div>
                  <div className="introduction__feature-text">熟練シェフ</div>
                </div>
                <div className="introduction__feature">
                  <div className="introduction__feature-icon">🥢</div>
                  <div className="introduction__feature-text">伝統的な技法</div>
                </div>
                <div className="introduction__feature">
                  <div className="introduction__feature-icon">🍶</div>
                  <div className="introduction__feature-text">厳選された日本酒</div>
                </div>
              </div>
            </>
          )}
          <div className="introduction__japanese-symbol introduction__japanese-symbol--top-right">和</div>
          <div className="introduction__japanese-symbol introduction__japanese-symbol--bottom-left">匠</div>
        </div>
        <div className="introduction__visual">
          <div className="introduction__image-grid">
            <div className="introduction__image-wrapper">
              <img src={require('./sushi-roll.jpg')} alt="Sushi" className="introduction__image" />
            </div>
            <div className="introduction__image-wrapper">
              <img src={require('./Tempura.jpg')} alt="Tempura" className="introduction__image" />
            </div>
            <div className="introduction__image-wrapper">
              <img src={require('./Rice.jpg')} alt="Rice bowl" className="introduction__image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;

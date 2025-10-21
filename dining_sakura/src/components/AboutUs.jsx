import React from 'react';
import { useLanguage } from '../LanguageContext';
import './AboutUs.css';

const AboutUs = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="about-us">
      <div className="about-us__pattern"></div>
      <div className="about-us__japanese-symbol about-us__japanese-symbol--top-right">私</div>
      <div className="about-us__japanese-symbol about-us__japanese-symbol--bottom-left">達</div>
      
      <div className="about-us__container">
        <div className="about-us__header">
          <h2 className="about-us__title">{language === 'en' ? 'Our Story' : '私たちの物語'}</h2>
          <div className="about-us__title-decoration">
            <span className="about-us__title-decoration--left"></span>
            <span className="about-us__title-decoration--circle"></span>
            <span className="about-us__title-decoration--right"></span>
          </div>
        </div>

        <div className="about-us__content">
          <div className="about-us__image-wrapper">
            <div className="about-us__image about-us__image--main"></div>
            <div className="about-us__image about-us__image--accent"></div>
          </div>
          
          <div className="about-us__text-content">
            <h3 className="about-us__subtitle">
              {language === 'en' ? 'Authentic Japanese Cuisine' : '本格的な日本料理'}
            </h3>
            
            <p className="about-us__paragraph">
              {language === 'en' ? (
                <>
                  Welcome to Dining Sakura! Our journey began in 2010 when Chef Takahashi brought his culinary expertise from Tokyo to create a truly authentic Japanese dining experience. Each dish tells a story of tradition, craftsmanship, and passion for Japanese cuisine.
                </>
              ) : (
                <>
                  ダイニング桜へようこそ！私たちの旅は、2010年に高橋シェフが東京から料理の専門知識を持ち込み、真に本格的な日本食の経験を作り出したときに始まりました。各料理は、伝統、職人技、そして日本料理への情熱の物語を語ります。
                </>
              )}
            </p>
            
            <p className="about-us__paragraph">
              {language === 'en' ? (
                <>
                  Our chefs have trained for years in Japan, mastering the art of sushi, ramen, tempura, and other traditional dishes. We source the freshest ingredients, including fish flown directly from Tsukiji Market and premium local produce, ensuring every bite is exceptional.
                </>
              ) : (
                <>
                  当店のシェフは日本で長年の修行を積み、寿司、ラーメン、天ぷらなどの伝統料理の技を極めています。築地市場から直接空輸される魚や、高品質の地元の農産物など、最も新鮮な食材を調達し、一口一口が特別なものになるよう心がけています。
                </>
              )}
            </p>
            
            <div className="about-us__values">
              <div className="about-us__value-item">
                <div className="about-us__value-icon">🍱</div>
                <h4 className="about-us__value-title">
                  {language === 'en' ? 'Quality' : '品質'}
                </h4>
                <p className="about-us__value-text">
                  {language === 'en' ? 'Premium ingredients from Japan and local markets' : '日本と地元市場からの高級食材'}
                </p>
              </div>
              
              <div className="about-us__value-item">
                <div className="about-us__value-icon">🏮</div>
                <h4 className="about-us__value-title">
                  {language === 'en' ? 'Tradition' : '伝統'}
                </h4>
                <p className="about-us__value-text">
                  {language === 'en' ? 'Authentic recipes passed down through generations' : '何世代にもわたって受け継がれる本格的なレシピ'}
                </p>
              </div>
              
              <div className="about-us__value-item">
                <div className="about-us__value-icon">🌸</div>
                <h4 className="about-us__value-title">
                  {language === 'en' ? 'Experience' : '経験'}
                </h4>
                <p className="about-us__value-text">
                  {language === 'en' ? 'Immersive dining atmosphere with Japanese hospitality' : '日本のおもてなしによる没入型の食事体験'}
                </p>
              </div>
            </div>
            
            <div className="about-us__quote">
              <blockquote>
                {language === 'en' ? (
                  '"Cuisine is not about how rare the ingredients are, but about the soul that goes into preparing them."'
                ) : (
                  '「料理とは、食材がどれだけ珍しいかではなく、それを調理する魂にかかっている。」'
                )}
              </blockquote>
              <cite>- {language === 'en' ? 'Chef Takahashi' : '高橋シェフ'}</cite>
            </div>
            
            <div className="about-us__cta">
              <a href="#reservation" className="about-us__button">
                {language === 'en' ? 'Reserve a Table' : 'テーブルを予約する'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import React from 'react';
import { useLanguage } from '../LanguageContext';

const IntroductionSection = () => {
  const { language } = useLanguage(); // Access the selected language

  return (
    <section className="introduction">
      <div className="container">
        {language === 'en' && (
          <>
            <h2 className="introduction__title">About 食堂桜</h2>
            <p className="introduction__description">
              Welcome to 食堂桜, where traditional Japanese flavors meet modern culinary techniques. 
              Our menu features a variety of authentic Japanese dishes prepared with the finest 
              ingredients sourced locally and from Japan. Whether you're craving sushi, ramen, or 
              bento boxes, we have something to satisfy every palate. Join us for a dining experience 
              that celebrates the rich culinary heritage of Japan.
            </p>
          </>
        )}
        {language === 'ja' && (
          <>
            <h2 className="introduction__title">食堂桜について</h2>
            <p className="introduction__description">
              食堂桜へようこそ。伝統的な日本の味が現代の調理技術と融合した場所です。
              当店のメニューには、地元や日本から取り寄せた最高の食材を使った、様々な本格的な日本料理があります。
              寿司、ラーメン、弁当など、あらゆる料理に対応しています。日本の豊かな料理文化を称賛するダイニング体験をお楽しみください。
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default IntroductionSection;

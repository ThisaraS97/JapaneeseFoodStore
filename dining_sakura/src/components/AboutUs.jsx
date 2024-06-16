import React from 'react';
import { useLanguage } from '../LanguageContext';
import './AboutUs.css';

const AboutUs = () => {
  const { language } = useLanguage();

  return (
    <div id="about">
    <section className="about-us">
      <div className="container">
        <h2 className="about-us__title">{language === 'en' ? 'About Us' : '私たちについて'}</h2>
        <p className="about-us__description">
          {language === 'en' ? (
            <>
              Welcome to Shokudō Sakura! We are a Japanese restaurant dedicated to bringing you the authentic taste of Japan. Our chefs have years of experience crafting delicious dishes using the finest ingredients. Whether you're craving sushi, ramen, or tempura, we have something for everyone.
            </>
          ) : (
            <>
              食堂桜へようこそ！私たちは、日本の本格的な味をお届けする日本料理店です。当店のシェフたちは、最高の食材を使用して、おいしい料理を作り上げるための豊富な経験を持っています。寿司、ラーメン、天ぷらなど、お客様のお好みに合わせたメニューをご用意しています。
            </>
          )}
        </p>
        <p className="about-us__description">
          {language === 'en' ? (
            <>
              At Shokudō Sakura, we pride ourselves on providing a welcoming atmosphere and exceptional service. Whether you're dining in or ordering takeout, we strive to ensure that every experience with us is memorable.
            </>
          ) : (
            <>
              食堂桜では、心地よい雰囲気と素晴らしいサービスを提供することを誇りに思っています。店内でのお食事やテイクアウトの場合でも、私たちはお客様が私たちとのすべての体験を思い出に残るものにすることを目指しています。
            </>
          )}
        </p>
        <p className="about-us__description">
          {language === 'en' ? (
            <>
              Come visit us today and embark on a culinary journey through Japan!
            </>
          ) : (
            <>
              今日、ぜひ当店にお越しください。日本の料理の旅に出かけましょう！
            </>
          )}
        </p>
      </div>
    </section>
    </div>
  );
};

export default AboutUs;

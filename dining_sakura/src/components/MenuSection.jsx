import React from 'react';
import sushiRollImage from './sushi-roll.jpg'; // Import image file
import Tempura from './Tempura.jpg'; // Import image file for Japanese menu item
import tofu from './tofu.jpg'; // Import image file for Japanese menu item
import Rice from './Rice.jpg'; // Import image file for Japanese menu item
import Kaiseki from './Kaiseki.jpg'; // Import image file for Japanese menu item
import Shabushabu from './Shabu-shabu.jpg'; // Import image file for Japanese menu item
import { useLanguage } from '../LanguageContext';
import './MenuSection.css';

const MenuSection = () => {
  const { language } = useLanguage(); // Access the selected language

  // Define menu items for English and Japanese
  const menuItemsEn = [
    {
      name: 'Sushi Roll',
      description: 'Delicious sushi with assorted fillings',
      price: '$12.99',
      image: sushiRollImage,
    },
    {
      name: 'Tempura Sushi',
      description: 'Delicious sushi with assorted fillings',
      price: '$12.99',
      image: Tempura,
    },
    {
      name: 'Tofu Sushi',
      description: 'Delicious sushi with assorted fillings',
      price: '$12.99',
      image: tofu,
    },
    {
      name: 'Rice & Curry',
      description: 'Delicious sushi with assorted fillings',
      price: '$12.99',
      image: Rice,
    },
    {
      name: 'Kaiseki Sushi',
      description: 'Delicious sushi with assorted fillings',
      price: '$12.99',
      image: Kaiseki,
    },
    {
      name: 'Shabu-shabu',
      description: 'Delicious sushi with assorted fillings',
      price: '$12.99',
      image: Shabushabu,
    },
    // Add more English menu items as needed
  ];

  const menuItemsJa = [
    {
      name: 'ラーメン',
      description: '様々な具材が入ったおいしいラーメン',
      price: '¥1000',
      image: sushiRollImage,
    },
    {
      name: '天ぷら寿司',
      description: '様々な具材が入ったおいしいラーメン',
      price: '¥1000',
      image: Tempura,
    },
    {
      name: '豆腐寿司',
      description: '様々な具材が入ったおいしいラーメン',
      price: '¥1000',
      image: tofu,
    },
    {
      name: 'ライス＆カレー',
      description: '様々な具材が入ったおいしいラーメン',
      price: '¥1000',
      image: Rice,
    },
    {
      name: '懐石寿司',
      description: '様々な具材が入ったおいしいラーメン',
      price: '¥1000',
      image: Kaiseki,
    },
    {
      name: 'しゃぶしゃぶ',
      description: '様々な具材が入ったおいしいラーメン',
      price: '¥1000',
      image: Shabushabu,
    },
    // Add more Japanese menu items as needed
  ];

  // Select the appropriate menu items based on the language selection
  const selectedMenuItems = language === 'en' ? menuItemsEn : menuItemsJa;

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2 className="menu-section__title">{language === 'en' ? 'Menu' : 'メニュー'}</h2>
        <div className="menu-items">
          {selectedMenuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="menu-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

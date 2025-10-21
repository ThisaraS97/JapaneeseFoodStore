import React, { useState } from 'react';
import sushiRollImage from './sushi-roll.jpg';
import Tempura from './Tempura.jpg';
import tofu from './tofu.jpg';
import Rice from './Rice.jpg';
import Kaiseki from './Kaiseki.jpg';
import Shabushabu from './Shabu-shabu.jpg';
import { useLanguage } from '../LanguageContext';
// Removed unused import: useTheme
// import { useTheme } from '../ThemeContext';
import './MenuSection.css';

const MenuSection = () => {
  const { language } = useLanguage();
  // Removed unused variable: theme
  // const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

  // Define menu items with categories
  const menuItemsEn = [
    {
      name: 'Signature Sakura Roll',
      description: 'Premium sushi roll with fresh salmon, avocado, and our special sakura sauce',
      price: '$16.99',
      image: sushiRollImage,
      category: 'sushi',
      tag: 'Best Seller'
    },
    {
      name: 'Assorted Tempura',
      description: 'Lightly battered and crispy tempura with seasonal vegetables and prawns',
      price: '$14.99',
      image: Tempura,
      category: 'appetizers',
      tag: 'Popular'
    },
    {
      name: 'Agedashi Tofu',
      description: 'Deep-fried tofu served in a dashi-based broth with ginger and daikon',
      price: '$10.99',
      image: tofu,
      category: 'appetizers'
    },
    {
      name: 'Premium Wagyu Don',
      description: 'Premium A5 wagyu beef served over steamed Japanese rice with special sauce',
      price: '$28.99',
      image: Rice,
      category: 'main',
      tag: 'Chef\'s Special'
    },
    {
      name: 'Seasonal Kaiseki',
      description: 'Traditional multi-course dining experience with seasonal ingredients',
      price: '$45.99',
      image: Kaiseki,
      category: 'main',
      tag: 'Seasonal'
    },
    {
      name: 'Premium Shabu-shabu',
      description: 'Premium thinly sliced meat and vegetables cooked in a savory broth at your table',
      price: '$32.99',
      image: Shabushabu,
      category: 'main'
    },
  ];

  const menuItemsJa = [
    {
      name: 'シグネチャー 桜ロール',
      description: '新鮮なサーモン、アボカド、特製桜ソースを使った高級寿司ロール',
      price: '¥1,800',
      image: sushiRollImage,
      category: 'sushi',
      tag: '人気商品'
    },
    {
      name: '天ぷら盛り合わせ',
      description: '季節の野菜と海老の軽く揚げたサクサクの天ぷら',
      price: '¥1,600',
      image: Tempura,
      category: 'appetizers',
      tag: '人気'
    },
    {
      name: '揚げ出し豆腐',
      description: '生姜と大根おろしを添えた出汁ベースのつゆで提供される揚げ豆腐',
      price: '¥1,200',
      image: tofu,
      category: 'appetizers'
    },
    {
      name: 'プレミアム和牛丼',
      description: '特製ソースをかけた日本米の上に提供されるプレミアムA5和牛',
      price: '¥3,200',
      image: Rice,
      category: 'main',
      tag: 'シェフのおすすめ'
    },
    {
      name: '季節の懐石料理',
      description: '季節の食材を使った伝統的なマルチコースのダイニング体験',
      price: '¥5,000',
      image: Kaiseki,
      category: 'main',
      tag: '季節限定'
    },
    {
      name: 'プレミアムしゃぶしゃぶ',
      description: 'テーブルで調理する風味豊かなスープに浸した薄切り肉と野菜',
      price: '¥3,600',
      image: Shabushabu,
      category: 'main'
    },
  ];

  // Select the appropriate menu items based on language
  const allMenuItems = language === 'en' ? menuItemsEn : menuItemsJa;
  
  // Filter by category if needed
  const menuItems = activeCategory === 'all' 
    ? allMenuItems 
    : allMenuItems.filter(item => item.category === activeCategory);

  // Categories
  const categories = [
    { id: 'all', name: language === 'en' ? 'All' : 'すべて' },
    { id: 'sushi', name: language === 'en' ? 'Sushi' : '寿司' },
    { id: 'appetizers', name: language === 'en' ? 'Appetizers' : '前菜' },
    { id: 'main', name: language === 'en' ? 'Main Dishes' : 'メイン料理' }
  ];

  return (
    <section id="menu" className="menu-section">
      <div className="menu-decoration menu-decoration--top-left">食</div>
      <div className="menu-decoration menu-decoration--bottom-right">料</div>
      
      <div className="menu-container">
        <div className="menu-section__header">
          <h2 className="menu-section__title">
            {language === 'en' ? 'Our Menu' : 'お品書き'}
          </h2>
          <p className="menu-section__description">
            {language === 'en' 
              ? 'Experience authentic Japanese cuisine with our carefully crafted dishes made with premium ingredients'
              : '厳選された食材を使用して丁寧に調理された本格的な日本料理をご体験ください'}
          </p>
          
          <div className="menu-categories">
            {categories.map(category => (
              <button
                key={category.id}
                className={`menu-category ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <div className="menu-item__image-container">
                {item.tag && <span className="menu-item__tag">{item.tag}</span>}
                <img src={item.image} alt={item.name} />
              </div>
              <div className="menu-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-item__footer">
                  <span>{item.price}</span>
                  <button className="menu-item__order-button">
                    {language === 'en' ? 'Order' : '注文'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="menu-section__view-all">
          <button className="menu-section__view-all-button">
            {language === 'en' ? 'View Full Menu' : '完全なメニューを見る'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

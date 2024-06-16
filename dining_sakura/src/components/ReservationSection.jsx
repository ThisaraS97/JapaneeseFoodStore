import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import './ReservationSection.css';

const ReservationSection = () => {
  const { language } = useLanguage(); // Access the selected language
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="reservation">
      <div className="container">
        <h2 className="reservation__title">
          {language === 'en' ? 'Reservation' : 'ご予約'}
        </h2>
        <p className="reservation__description">
          {language === 'en' ?
            'Book your table now and experience the best of Japanese cuisine.' 
            : 
            '今すぐテーブルを予約して、日本料理の最高の味をご体験ください。'}
        </p>
        <form className="reservation__form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder={language === 'en' ? 'Name' : 'お名前'} 
            value={formData.name} 
            onChange={handleChange} 
          />
          <input 
            type="email" 
            name="email" 
            placeholder={language === 'en' ? 'Email' : 'メールアドレス'} 
            value={formData.email} 
            onChange={handleChange} 
          />
          <input 
            type="tel" 
            name="mobile" 
            placeholder={language === 'en' ? 'Mobile Number' : '携帯番号'} 
            value={formData.mobile} 
            onChange={handleChange} 
          />
          <button type="submit">
            {language === 'en' ? 'Submit' : '送信'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;

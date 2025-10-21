import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import './ReservationSection.css';

const ReservationSection = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequest: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      // Reset form after successful submission
      setFormData({
        name: '', 
        email: '', 
        phone: '',
        date: '',
        time: '',
        guests: '2',
        specialRequest: ''
      });
    }, 3000);
  };

  // Get today's date in YYYY-MM-DD format for the date input min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="reservation" id="reservation">
      <div className="reservation__pattern"></div>
      <div className="reservation__japanese-symbol reservation__japanese-symbol--top-left">予</div>
      <div className="reservation__japanese-symbol reservation__japanese-symbol--bottom-right">約</div>
      
      <div className="reservation__container">
        <div className="reservation__header">
          <h2 className="reservation__title">
            {language === 'en' ? 'Make a Reservation' : 'ご予約'}
          </h2>
          <p className="reservation__description">
            {language === 'en'
              ? 'Experience authentic Japanese cuisine by reserving your table today. For parties of 8 or more, please contact us directly.'
              : '本格的な日本料理を体験するには、今日テーブルを予約してください。8名様以上の場合は、直接お問い合わせください。'}
          </p>
        </div>

        <div className="reservation__content">
          <div className="reservation__image-container">
            <div className="reservation__image"></div>
          </div>
          
          <div className="reservation__form-container">
            {isSubmitted ? (
              <div className="reservation__success-message">
                <div className="reservation__success-icon">✓</div>
                <h3>{language === 'en' ? 'Thank You!' : 'ありがとうございます！'}</h3>
                <p>
                  {language === 'en' 
                    ? 'Your reservation has been received. We will contact you shortly to confirm your booking.'
                    : 'ご予約いただきありがとうございます。確認のためにすぐにご連絡いたします。'}
                </p>
              </div>
            ) : (
              <form className="reservation__form" onSubmit={handleSubmit}>
                <div className="reservation__form-group reservation__form-group--half">
                  <label htmlFor="name" className="reservation__label">
                    {language === 'en' ? 'Name' : 'お名前'}
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    required
                    value={formData.name} 
                    onChange={handleChange} 
                    className="reservation__input"
                  />
                </div>
                
                <div className="reservation__form-group reservation__form-group--half">
                  <label htmlFor="email" className="reservation__label">
                    {language === 'en' ? 'Email' : 'メールアドレス'}
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    required
                    value={formData.email} 
                    onChange={handleChange} 
                    className="reservation__input"
                  />
                </div>
                
                <div className="reservation__form-group reservation__form-group--half">
                  <label htmlFor="phone" className="reservation__label">
                    {language === 'en' ? 'Phone' : '電話番号'}
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    required
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="reservation__input"
                  />
                </div>
                
                <div className="reservation__form-group reservation__form-group--half">
                  <label htmlFor="guests" className="reservation__label">
                    {language === 'en' ? 'Number of Guests' : '人数'}
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="reservation__input"
                    required
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                <div className="reservation__form-group reservation__form-group--half">
                  <label htmlFor="date" className="reservation__label">
                    {language === 'en' ? 'Date' : '日付'}
                  </label>
                  <input 
                    type="date" 
                    id="date"
                    name="date" 
                    min={today}
                    required
                    value={formData.date} 
                    onChange={handleChange} 
                    className="reservation__input"
                  />
                </div>
                
                <div className="reservation__form-group reservation__form-group--half">
                  <label htmlFor="time" className="reservation__label">
                    {language === 'en' ? 'Time' : '時間'}
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="reservation__input"
                    required
                  >
                    <option value="">{language === 'en' ? 'Select a time' : '時間を選択'}</option>
                    {['11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'].map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                
                <div className="reservation__form-group reservation__form-group--full">
                  <label htmlFor="specialRequest" className="reservation__label">
                    {language === 'en' ? 'Special Requests' : '特別なリクエスト'}
                  </label>
                  <textarea 
                    id="specialRequest"
                    name="specialRequest" 
                    value={formData.specialRequest} 
                    onChange={handleChange} 
                    className="reservation__textarea"
                    placeholder={language === 'en' ? 'Allergies, dietary restrictions, special occasions, etc.' : 'アレルギー、食事制限、特別な機会など'}
                  ></textarea>
                </div>
                
                <div className="reservation__form-group reservation__form-group--full reservation__form-group--submit">
                  <button type="submit" className="reservation__button">
                    {language === 'en' ? 'Confirm Reservation' : '予約を確認する'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        
        <div className="reservation__details">
          <div className="reservation__detail-item">
            <div className="reservation__detail-icon">🕒</div>
            <div className="reservation__detail-content">
              <h4 className="reservation__detail-title">{language === 'en' ? 'Hours' : '営業時間'}</h4>
              <p className="reservation__detail-text">
                {language === 'en' ? 'Lunch: 11:00 AM - 2:30 PM' : 'ランチ: 11:00 - 14:30'}<br />
                {language === 'en' ? 'Dinner: 6:00 PM - 10:30 PM' : 'ディナー: 18:00 - 22:30'}
              </p>
            </div>
          </div>
          
          <div className="reservation__detail-item">
            <div className="reservation__detail-icon">📞</div>
            <div className="reservation__detail-content">
              <h4 className="reservation__detail-title">{language === 'en' ? 'Contact' : 'お問い合わせ'}</h4>
              <p className="reservation__detail-text">+81 3-1234-5678<br />info@diningsakura.jp</p>
            </div>
          </div>
          
          <div className="reservation__detail-item">
            <div className="reservation__detail-icon">📍</div>
            <div className="reservation__detail-content">
              <h4 className="reservation__detail-title">{language === 'en' ? 'Location' : '場所'}</h4>
              <p className="reservation__detail-text">
                {language === 'en' 
                  ? '123 Sakura Street, Tokyo, Japan'
                  : '〒123-4567 東京都新宿区桜通り123'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;

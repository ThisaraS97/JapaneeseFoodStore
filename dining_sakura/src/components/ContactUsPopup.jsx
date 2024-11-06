import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../LanguageContext'; // Import useLanguage hook
import './ContactUsPopup.css';

const ContactUsPopup = ({ onClose }) => {
  const popupRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage(); // Access the selected language

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    // Set isOpen to true after a short delay to allow smooth transition
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`contact-us-popup ${isOpen ? 'open' : ''}`} ref={popupRef}>
      <div className="contact-us-popup__content">
        <h2>{language === 'en' ? 'Contact Us' : 'お問い合わせ'}</h2>
        <p>{language === 'en' ? 'Contact Number:' : '連絡先番号:'} +123456789</p>
        <p>{language === 'en' ? 'Email:' : 'メール:'} info@example.com</p>
        <p>{language === 'en' ? 'Location:' : 'ロケーション:'} Tokyo, Japan</p>
        <p>{language === 'en' ? 'Working Hours:' : '営業時間:'} 9:00 AM - 6:00 PM (Mon-Fri)</p>
        <p>{language === 'en' ? 'Land Number:' : '土地の番号:'} +8123456789</p>
        <div className="contact-us-popup__map">
          <iframe
            title="Tokyo Location Map" // Add a unique title for accessibility
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.2187746201146!2d139.69170641557378!3d35.68948738018933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188e5b7a167239%3A0x30df5e27d02284e!2sTokyo%2C%20Japan!5e0!3m2!1sen!2suk!4v1643412182487!5m2!1sen!2suk"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPopup;

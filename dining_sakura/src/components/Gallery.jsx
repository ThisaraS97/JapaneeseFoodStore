import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import './Gallery.css';

// Import your image files
import image1 from './GalleryImage1.png';
import image2 from './GalleryImage3.jpg';
import image3 from './GalleryImage4.jpg';
import image4 from './GalleryImage5.jpg';
import image5 from './GalleryImage1.png';
import image6 from './GalleryImage3.jpg';
import image7 from './GalleryImage4.jpg';
import image8 from './GalleryImage5.jpg';
import image9 from './GalleryImage4.jpg';
import image10 from './GalleryImage5.jpg';

const Gallery = () => {
  const { language } = useLanguage();
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
  const itemsToShow = 3; // Number of images to show at once
  const totalImages = images.length;

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  // Calculate the index of the middle image
  const middleIndex = Math.floor(itemsToShow / 2);
  
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery__header">
        <h2 className="gallery__title">{language === 'en' ? 'Our Gallery' : 'ギャラリー'}</h2>
        <p className="gallery__description">
          {language === 'en' 
            ? 'Explore the visual journey of our culinary artistry and dining atmosphere.' 
            : '私たちの料理の芸術性とダイニングの雰囲気をご覧ください。'}
        </p>
      </div>
      
      <div className="gallery">
        <button className="gallery__arrow gallery__prev" onClick={goToPrev}>
          &#10094; {/* Left arrow symbol */}
        </button>
        <div className="gallery__image-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery__image-wrapper ${index === (currentIndex + middleIndex) % totalImages ? 'active' : ''}`}
              style={{
                transform: `translateX(-${(currentIndex - middleIndex) * (100 / itemsToShow)}%)`,
              }}
            >
              <img src={image} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="gallery__arrow gallery__next" onClick={goToNext}>
          &#10095; {/* Right arrow symbol */}
        </button>
      </div>
    </section>
  );
};

export default Gallery;

import React, { useState } from 'react';
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
  // Array of image URLs
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
  const itemsPerPage = 4; // Number of images to display per page
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedImages = images.slice(startIndex, endIndex);

  return (
    <div className="gallery">
      <div className="gallery__image-container">
        {displayedImages.map((image, index) => (
          <div key={index} className="gallery__image-wrapper" style={{ transform: `translateX(${index === 0 ? 0 : -100 * index}%)` }}>
            <img src={image} alt={`Gallery item ${startIndex + index + 1}`} />
          </div>
        ))}
      </div>
      <button className="gallery__arrow gallery__prev" onClick={goToPrevPage}>
        &#10094; {/* Left arrow symbol */}
      </button>
      <button className="gallery__arrow gallery__next" onClick={goToNextPage}>
        &#10095; {/* Right arrow symbol */}
      </button>
    </div>
  );
};

export default Gallery;

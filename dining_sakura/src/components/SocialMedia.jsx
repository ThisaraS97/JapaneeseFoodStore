import React from 'react';
import './SocialMedia.css'; // Import CSS for styling social media icons
import '@fortawesome/fontawesome-free/css/all.css';


const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i> {/* Twitter icon */}
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i> {/* Instagram icon */}
      </a>
    </div>
  );
};

export default SocialMedia;

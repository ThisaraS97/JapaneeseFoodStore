import React from 'react';
import { useTheme } from '../ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <button 
        className={`theme-toggle__button ${isDarkMode ? 'dark' : 'light'}`}
        onClick={toggleTheme}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className="theme-toggle__icon-container">
          <div className="theme-toggle__icon theme-toggle__sun">☀️</div>
          <div className="theme-toggle__icon theme-toggle__moon">🌙</div>
        </div>
        <div className="theme-toggle__slider"></div>
      </button>
    </div>
  );
};

export default ThemeToggle;
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

// Modern Japanese color themes
export const themes = {
  light: {
    name: 'light',
    colors: {
      primary: '#8E354A', // Kurenai (deep red)
      secondary: '#F7C242', // Japanese yellow
      tertiary: '#5A8F7B', // Japanese jade green
      accent: '#1B813E', // Japanese pine green
      background: '#FCFAF2', // Off-white rice paper color
      text: '#1A1A1A', // Almost black
      headerBg: '#FCFAF2',
      footerBg: '#5A4744', // Dark brown
      buttonBg: '#8E354A', // Same as primary
      buttonText: '#FFFFFF',
      cardBg: '#FFFFFF',
      cardBorder: '#E8E8E8'
    },
    fonts: {
      primary: "'Noto Sans JP', sans-serif",
      heading: "'Zen Maru Gothic', serif"
    }
  },
  dark: {
    name: 'dark',
    colors: {
      primary: '#D05A6E', // Lighter red for dark mode
      secondary: '#F0CA8E', // Lighter gold for dark mode
      tertiary: '#7EB89E', // Lighter jade green
      accent: '#24AD54', // Brighter green for dark mode
      background: '#1A1A1A', // Dark charcoal
      text: '#F7F7F7', // Almost white
      headerBg: '#262626',
      footerBg: '#1F1F1F',
      buttonBg: '#D05A6E', // Same as primary
      buttonText: '#FFFFFF',
      cardBg: '#262626',
      cardBorder: '#333333'
    },
    fonts: {
      primary: "'Noto Sans JP', sans-serif",
      heading: "'Zen Maru Gothic', serif"
    }
  }
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? themes.dark : themes.light;

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme: currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

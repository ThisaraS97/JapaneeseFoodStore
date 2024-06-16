import React, { createContext, useState, useContext } from 'react';

// Create a context to manage the selected language
const LanguageContext = createContext();

// Custom hook to access the selected language and its setter
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Language provider component to wrap around your app
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

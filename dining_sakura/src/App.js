import HomePage from './pages/HomePage';
import ThemeToggle from './components/ThemeToggle';
import './App.css';
import { LanguageProvider } from './LanguageContext';
import { ThemeProvider, useTheme } from './ThemeContext';

const AppContent = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <LanguageProvider>
        <HomePage />
        <ThemeToggle />
      </LanguageProvider>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

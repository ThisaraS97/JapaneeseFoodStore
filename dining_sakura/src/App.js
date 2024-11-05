import HomePage from './pages/HomePage';
import './App.css';
import { LanguageProvider } from './LanguageContext'; // Import LanguageProvider
import { ThemeProvider } from './ThemeContext'; // Import ThemeProvider
import './i18n'; // Import i18n

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      
        <LanguageProvider>
          <HomePage />
        </LanguageProvider>
    
    </div>
    </ThemeProvider>
  );
}

export default App;

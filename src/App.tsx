import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { darkTheme, lightTheme } from './styles/themes';
import { Home } from './Pages/Home';
import { PokeDetails } from './Pages/PokeDetails';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} toggleTheme={toggleTheme} />}
          />
          <Route path="/poke/:id" element={<PokeDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

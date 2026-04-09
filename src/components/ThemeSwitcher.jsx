import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      Theme is currently: {theme}
    </button>
  );
};
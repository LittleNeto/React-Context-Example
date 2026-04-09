import './App.css';
import React, { useContext } from 'react';
import { ContactsSection } from './components/ContactsSection';
import { ThemeContext } from './context/ThemeContext';
import { ThemeSwitcher } from './components/ThemeSwitcher';

const family = [
  { name: 'Finn the Human' },
  { name: 'Jake the Dog' }
];

const friends = [
  { name: 'Marceline' },
  { name: 'Princess Bubblegum' }
];

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`theme-${theme}`}>
      <h1>Contacts</h1>
      <ThemeSwitcher />

      <ContactsSection contacts={family} name="Family" />
      <ContactsSection contacts={friends} name="Friends" />
    </div>
  );
};

export default App;

import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const ContactItem = ({ name }) => {
  const { theme } = useContext(ThemeContext);
  let currentLocation = null;

  return (
    <div>
      {name}
    </div>
  );
};
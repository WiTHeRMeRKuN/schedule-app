import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/settings/settingsSlice';

const ThemeToggle = () => {
  const theme = useSelector(state => state.settings.theme);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      style={{
        padding: '6px 12px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        cursor: 'pointer',
        transform: 'translateY(-5px)',
        fontSize: '24px'
      }}
      title="Переключить тему"
    >
      🌗
    </button>
  );
};

export default ThemeToggle;
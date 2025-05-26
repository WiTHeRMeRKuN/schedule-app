import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDay } from '../features/settings/settingsSlice';

const days = [
  'Понедельник', 'Вторник', 'Среда',
  'Четверг', 'Пятница', 'Суббота', 'Воскресенье'
];

const DaySelector = () => {
  const currentDay = useSelector(state => state.settings.currentDay);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
      {days.map(day => (
        <button
          key={day}
          onClick={() => dispatch(setDay(day))}
          style={{
            padding: '10px 15px',
            borderRadius: '20px',
            fontWeight: '500',
            border: 'none',
            backgroundColor: day === currentDay ? '#007bff' : '#e0e0e0',
            color: day === currentDay ? '#fff' : '#333',
            cursor: 'pointer'
        }}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default DaySelector;
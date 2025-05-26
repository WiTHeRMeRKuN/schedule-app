import React from 'react';
import { useSelector } from 'react-redux';
import DaySelector from './components/DaySelector';
import ScheduleTable from './components/ScheduleTable';
import LessonForm from './components/LessonForm';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const theme = useSelector(state => state.settings.theme);

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
        color: theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      {/* Верхняя панель */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '10px'
        }}
      >
        <img
          src="/i.webp"
          alt="МТУСИ"
          style={{
            height: '70px',
            objectFit: 'contain'
          }}
        />
        <ThemeToggle />
      </div>

      {/* Заголовок */}
      <h1 style={{ textAlign: 'center', margin: '10px 0 30px' }}>
        Расписание занятий: Меркун Владислав M092401(75)
      </h1>

      {/* Кнопки дней недели */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <DaySelector />
      </div>

      {/* Основной блок */}
      <div style={{ maxWidth: '960px', margin: '30px auto' }}>
        <LessonForm />
        <ScheduleTable />
      </div>
    </div>
  );
}

export default App;
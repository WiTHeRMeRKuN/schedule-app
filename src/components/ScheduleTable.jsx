import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeLesson
} from '../features/schedule/scheduleSlice';

const ScheduleTable = () => {
  const currentDay = useSelector(state => state.settings.currentDay);
  const theme = useSelector(state => state.settings.theme);
  const lessons = useSelector(state =>
    state.schedule.filter(lesson => lesson.day === currentDay)
);

  const dispatch = useDispatch();

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Расписание на {currentDay}</h2>
      {lessons.length === 0 ? (
        <p style={{ fontStyle: 'italic' }}>Нет занятий на этот день</p>
      ) : (
        lessons.map(lesson => (
          <div
            key={lesson.id}
            style={{
              backgroundColor: theme === 'light' ? '#f9f9f9' : '#3a3a3a',
              padding: '15px',
              borderRadius: '8px',
              marginBottom: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div>
              <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                {lesson.time} — {lesson.subject}
              </div>
              <div style={{ fontSize: '14px', marginTop: '4px' }}>
                Преподаватель: {lesson.teacher} | Аудитория: {lesson.location}
              </div>
            </div>
            <div>
              <button
  onClick={() => dispatch(removeLesson(lesson.id))}
  style={{
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 12px',
    cursor: 'pointer'
  }}
>
  Удалить
</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ScheduleTable;
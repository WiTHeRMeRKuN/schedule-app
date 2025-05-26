import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLesson } from '../features/schedule/scheduleSlice';

const LessonForm = () => {
  const dispatch = useDispatch();
  const currentDay = useSelector(state => state.settings.currentDay);

  const [formData, setFormData] = useState({
    time: '',
    subject: '',
    teacher: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addLesson({ ...formData, day: currentDay }));
    setFormData({ time: '', subject: '', teacher: '', location: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
      <h3 style={{ marginBottom: '15px' }}>Добавить занятие на {currentDay}</h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          alignItems: 'center'
        }}
      >
        <input type="time" name="time" value={formData.time} onChange={handleChange} required style={{ flex: '0 0 120px', height: '40px' }} />
        <input type="text" name="subject" placeholder="Предмет" value={formData.subject} onChange={handleChange} required style={{ flex: '1', minWidth: '150px', height: '40px' }} />
        <input type="text" name="teacher" placeholder="Преподаватель" value={formData.teacher} onChange={handleChange} required style={{ flex: '1', minWidth: '150px', height: '40px' }} />
        <input type="text" name="location" placeholder="Аудитория" value={formData.location} onChange={handleChange} required style={{ flex: '1', minWidth: '120px', height: '40px' }} />
        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px', padding: '10px 20px', cursor: 'pointer', height: '40px' }}>
          Добавить
        </button>
      </div>
    </form>
  );
};

export default LessonForm;
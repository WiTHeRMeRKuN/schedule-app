import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addLesson: (state, action) => {
      state.push({ id: nanoid(), ...action.payload });
    },
    removeLesson: (state, action) => {
      return state.filter(lesson => lesson.id !== action.payload);
    },
    updateLesson: (state, action) => {
      const index = state.findIndex(lesson => lesson.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    }
  }
});

export const { addLesson, removeLesson, updateLesson } = scheduleSlice.actions;
export default scheduleSlice.reducer;
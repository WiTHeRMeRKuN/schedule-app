import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentDay: 'Понедельник',
  theme: 'light'
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setDay: (state, action) => {
      state.currentDay = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    }
  }
});

export const { setDay, toggleTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'; // that mean change light to dark or dark to light
        },
        }
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;
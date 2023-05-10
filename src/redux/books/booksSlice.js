import { createSlice } from '@reduxjs/toolkit';

const initialState = {

};

const booksSlice = createSlice({
  name: 'book',
  initialState,
});

export default booksSlice.reducer;

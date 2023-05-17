import { createSlice } from '@reduxjs/toolkit';
import booksList from '../../components/booksList';

const initialState = {
  booksList,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksList.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.booksList = state.booksList.filter((book) => book.item_id !== bookId);
    },
  },
});
export const { removeBook, addBook } = bookSlice.actions;

export default bookSlice.reducer;

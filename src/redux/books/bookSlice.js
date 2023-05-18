import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import booksList from '../../components/booksList';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const initialState = {
  booksList,
};

export const getBooksList = createAsyncThunk('book/getBooksList', () => fetch(url)
  .then((resp) => resp.json())
  .catch((error) => console.log(error)));

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
  extraReducers: {
    [getBooksList.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooksList.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getBooksList.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { removeBook, addBook } = bookSlice.actions;

export default bookSlice.reducer;

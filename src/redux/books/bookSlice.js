import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BooksApiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Id8BnsXjGP3gDOBoRJH2B';

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    await axios.post(`${BooksApiURL}/books`, book);
  } catch (e) {
    throw new Error(e);
  }
  return book;
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookID) => {
  try {
    await axios.delete(`${BooksApiURL}/books/${bookID}`);
  } catch (e) {
    throw new Error(e);
  }
  return bookID;
});

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const res = await axios.get(`${BooksApiURL}/books`);

  const books = Object.entries(res.data).map((book) => (
    {
      ...book[1][0],
      item_id: book[0],
    }
  ));
  return books;
});

const initialState = {
  books: [],
  isLoading: false,
  isError: undefined,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });

    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    });

    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });

    builder.addCase(getBooks.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default bookSlice.reducer;

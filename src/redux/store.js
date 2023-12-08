import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice.js';
import categoriesReducer from './categories/categoriesSlice.js';

const store = configureStore({
  reducer: {
    books: bookReducer,
    catagories: categoriesReducer,
  },
});

export default store;

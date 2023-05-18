import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    catagories: categoriesReducer,
  },
});

export default store;

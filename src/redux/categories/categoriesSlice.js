import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const CatagoriesSlice = createSlice({
  name: 'Catagories',
  initialState,
});

export default CatagoriesSlice.reducer;

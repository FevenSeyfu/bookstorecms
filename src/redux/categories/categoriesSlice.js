import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catagories: [],
  status: 'Under construction',
};

const CatagoriesSlice = createSlice({
  name: 'Catagories',
  initialState,
  reducers: {
    Checkstatus: (state) => ({
      state,
      status: 'Under construction',
    }),
  },
});

export default CatagoriesSlice.reducer;

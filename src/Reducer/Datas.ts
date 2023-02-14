import { createSlice } from '@reduxjs/toolkit';

export const DatasSlice = createSlice({
  name: 'Datas',
  initialState: [],
  reducers: {
    add: (state, action) => {
      return state.concat(action.payload);
    },
    del: (state, action) => {
      state.splice(action.payload, 1);
      return state;
    },
  },
});

export const { del, add } = DatasSlice.actions;
export default DatasSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';
const DataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
    resetData() {
      return '';
    },
  },
});
export const { setData, resetData } = DataSlice.actions;
export default DataSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: number = 0;
const IndexSlice = createSlice({
  name: 'line',
  initialState,
  reducers: {
    setIndex: (state, action: PayloadAction<number>) => {
      return action.payload;
    },
    resetIndex() {
      return 0;
    },
  },
});
export const { setIndex, resetIndex } = IndexSlice.actions;
export default IndexSlice.reducer;

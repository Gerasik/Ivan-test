import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';

// Define a type for the slice state
interface SearchState {
  searchValue: string;
}

// Define the initial state using that type
const initialState: SearchState = {
  searchValue: localStorage.getItem('searchInputValue') || '',
};

export const searchValueSlice = createSlice({
  name: 'searchValue',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      console.log(
        '🚀 ~ file: searchSlice.ts:22 ~ action.payload:',
        action.payload
      );
      localStorage.setItem('searchInputValue', action.payload);
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSearchValue = (state: RootState) =>
  state.saveToLocal.searchValue;

export default searchValueSlice.reducer;

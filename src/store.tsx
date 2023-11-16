import { configureStore } from '@reduxjs/toolkit';
import searchValueSlice from './common/redux/slice/searchSlice';

export const store = configureStore({
  reducer: { saveToLocal: searchValueSlice },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

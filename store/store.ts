import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'; //eslint-disable-line
import { configureStore } from '@reduxjs/toolkit';

import configReducer, { configStateActions } from './configSlice';
import languageReducer, { languageStateActions } from './languageSlice';

const store = configureStore({
  reducer: {
    config: configReducer,
    language: languageReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { configStateActions, languageStateActions };

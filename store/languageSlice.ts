import { createSlice } from '@reduxjs/toolkit';

interface LanguageSlice {
  id: string;
  title: string;
}

const initialLanguageState: LanguageSlice = {
  id: 'en',
  title: 'English',
};

const languageSlice = createSlice({
  name: 'language',
  initialState: initialLanguageState,
  reducers: {
    replace(state, action) {
      return action.payload;
    },
  },
});

const { actions: languageStateActions, reducer: languageReducer } =
  languageSlice;

export { languageStateActions };
export default languageReducer;

import { createSlice } from '@reduxjs/toolkit';

interface ConfigsInterface {
  theme: string;
  foo: string;
}

const initialConfigState: ConfigsInterface = {
  theme: 'light',
  foo: 'bar',
};

const configSlice = createSlice({
  name: 'config',
  initialState: initialConfigState,
  reducers: {
    replace(state, action) {
      return action.payload;
    },
  },
});

const { actions: configStateActions, reducer: configReducer } = configSlice;

export { configStateActions };
export default configReducer;

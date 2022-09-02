import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface AllergensState {
  data: {};
}

const initialsAllergens: AllergensState = {
  data: {},
};

export const AllergensSlice = createSlice({
  name: 'allergens',
  initialState: initialsAllergens,
  reducers: {
    fetchAllergens() {},
    setAllergens(state, action) {
      return {...state, data: {...state.data, ...action.payload.allergens}};
    },
  },
});

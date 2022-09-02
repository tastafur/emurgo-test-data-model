import {createReducer} from '@reduxjs/toolkit';

import {setFoodTypes} from '../actions/foodTypes';
import {normalizeState} from '../utils/store';

const initialsFoodTypes = {
  data: {},
};

export const foodTypes = createReducer(initialsFoodTypes, builder => {
  builder.addCase(setFoodTypes, (state, action) => {
    state.data = normalizeState(action.payload.foodTypes);
  });
});

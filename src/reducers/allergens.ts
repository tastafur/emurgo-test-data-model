import {createReducer} from '@reduxjs/toolkit';

import {setAllergens} from '../actions/allergens';
import {normalizeState} from '../utils/store';

const initialsAllergens = {
  data: {},
};

export const allergens = createReducer(initialsAllergens, builder => {
  builder.addCase(setAllergens, (state, action) => {
    state.data = normalizeState(action.payload.allergens);
  });
});

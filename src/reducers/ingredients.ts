import {createReducer} from '@reduxjs/toolkit';

import {setIngredients} from '../actions/ingredients';
import {normalizeState} from '../utils/store';

const initialsIngredients = {
  data: {},
};

export const ingredients = createReducer(initialsIngredients, builder => {
  builder.addCase(setIngredients, (state, action) => {
    state.data = normalizeState(action.payload.ingredients);
  });
});

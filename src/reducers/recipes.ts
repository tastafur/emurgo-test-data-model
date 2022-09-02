import {createReducer} from '@reduxjs/toolkit';

import {setRecipes} from '../actions/recipes';

import {normalizeState} from '../utils/store';

const initialsRecipes = {
  data: {},
};

export const recipes = createReducer(initialsRecipes, builder => {
  builder.addCase(setRecipes, (state, action) => {
    state.data = normalizeState(action.payload.recipes);
  });
});

import {recipeType} from '../models/recipe';

import {createAction} from '@reduxjs/toolkit';

export const SET_RECIPES = 'SET_RECIPES';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_FINISH = 'FETCH_RECIPES_FINISH';

export const fetchRecipes = createAction(FETCH_RECIPES);
export const fetchRecipesFinish = createAction(FETCH_RECIPES_FINISH);
export const fetchRecipesFinishError = createAction(
  FETCH_RECIPES_FINISH,
  (error: any) => ({payload: error, error: true}),
);

export const setRecipes = createAction(
  SET_RECIPES,
  (recipes: recipeType[]) => ({
    payload: {
      recipes,
    },
  }),
);

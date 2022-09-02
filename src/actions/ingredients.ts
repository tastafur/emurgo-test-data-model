import {ingredientType} from '../models/ingredient';

import {createAction} from '@reduxjs/toolkit';

export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS';
export const FETCH_INGREDIENTS_FINISH = 'FETCH_INGREDIENTS_FINISH';

export const fetchIngredients = createAction(FETCH_INGREDIENTS);

export const fetchIngredientsFinish = createAction(FETCH_INGREDIENTS_FINISH);

export const fetchIngredientsFinishError = createAction(
  FETCH_INGREDIENTS_FINISH,
  (error: any) => ({payload: error, error: true}),
);

export const setIngredients = createAction(
  SET_INGREDIENTS,
  (ingredients: ingredientType[]) => ({
    payload: {
      ingredients,
    },
  }),
);

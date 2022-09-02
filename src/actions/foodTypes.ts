import {foodType} from '../models/foodType';

import {createAction} from '@reduxjs/toolkit';

export const SET_FOOD_TYPES = 'SET_FOOD_TYPES';
export const FETCH_FOOD_TYPES = 'FETCH_FOOD_TYPES';

export const fetchFoodTypes = createAction(FETCH_FOOD_TYPES);

export const setFoodTypes = createAction(
  SET_FOOD_TYPES,
  (foodTypes: foodType[]) => ({
    payload: {
      foodTypes,
    },
  }),
);

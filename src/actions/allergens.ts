import {allergenType} from '../models/allergen';

import {createAction} from '@reduxjs/toolkit';

export const FETCH_ALLERGENS = 'FETCH_ALLERGENS';
export const SET_ALLERGENS = 'SET_ALLERGENS';

export const fetchAllergens = createAction(FETCH_ALLERGENS);

export const setAllergens = createAction(
  SET_ALLERGENS,
  (allergens: allergenType[]) => ({
    payload: {
      allergens,
    },
  }),
);

import {allergenType} from '../models/allergen';

export const SET_ALLERGENS = 'SET_ALLERGENS';
export const FETCH_ALLERGENS = 'FETCH_ALLERGENS';

export function fetchAllergens() {
  return {
    type: FETCH_ALLERGENS,
  };
}

export function setAllergens(allergens: allergenType[]) {
  return {
    type: SET_ALLERGENS,
    payload: {
      allergens,
    },
  };
}

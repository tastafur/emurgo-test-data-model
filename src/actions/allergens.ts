import {allergenType} from '../models/allergen';

export const SET_ALLERGENS = 'SET_ALLERGENS';

export function setAllergens(allergens: allergenType[]) {
  return {
    type: SET_ALLERGENS,
    payload: {
      allergens,
    },
  };
}

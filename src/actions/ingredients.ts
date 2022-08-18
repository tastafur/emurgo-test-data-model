import {ingredientType} from '../models/ingredient';

export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS';

export function fetchIngredients() {
  return {
    type: FETCH_INGREDIENTS,
  };
}

export function setIngredients(ingredients: ingredientType[]) {
  return {
    type: SET_INGREDIENTS,
    payload: {
      ingredients,
    },
  };
}

import {ingredientType} from '../models/ingredient';

export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS';
export const FETCH_INGREDIENTS_FINISH = 'FETCH_INGREDIENTS_FINISH';

export function fetchIngredients() {
  return {
    type: FETCH_INGREDIENTS,
  };
}

export function fetchIngredientsFinish() {
  return {
    type: FETCH_INGREDIENTS_FINISH,
  };
}

export function fetchIngredientsFinishError(error: any) {
  return {
    type: FETCH_INGREDIENTS_FINISH,
    payload: error,
    error: true,
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

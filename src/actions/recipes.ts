import {recipeType} from '../models/recipe';

export const SET_RECIPES = 'SET_RECIPES';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_FINISH = 'FETCH_RECIPES_FINISH';

export function fetchRecipes() {
  return {
    type: FETCH_RECIPES,
  };
}

export function fetchRecipesFinish() {
  return {
    type: FETCH_RECIPES_FINISH,
  };
}

export function fetchRecipesFinishError(error: any) {
  return {
    type: FETCH_RECIPES_FINISH,
    payload: error,
    error: true,
  };
}

export function setRecipes(recipes: recipeType[]) {
  return {
    type: SET_RECIPES,
    payload: {
      recipes,
    },
  };
}

import {recipeType} from '../models/recipe';

export const SET_RECIPES = 'SET_RECIPES';
export const FETCH_RECIPES = 'FETCH_RECIPES';

export function fetchRecipes() {
  return {
    type: FETCH_RECIPES,
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

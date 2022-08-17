import {recipeType} from '../models/recipe';

export const SET_RECIPES = 'SET_RECIPES';

export function setRecipes(recipes: recipeType[]) {
  return {
    type: SET_RECIPES,
    payload: {
      recipes,
    },
  };
}

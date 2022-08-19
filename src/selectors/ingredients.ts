import {ingredientType} from '../models/ingredient';

interface RootState {
  ingredients: {
    data: {[key: number]: ingredientType};
  };
}

export const selectIngredientsNormalize = (state: RootState) =>
  state.ingredients.data;

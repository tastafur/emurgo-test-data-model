import {unNormalizeState} from '../utils/store';
import {recipeFormatDrownType, recipeType} from '../models/recipe';
import {ingredientType} from '../models/ingredient';
import {allergenType} from '../models/allergen';

export interface RootStateRecipes {
  recipes: {
    data: {[key: number]: recipeType};
  };
  ingredients: {
    data: {[key: number]: ingredientType};
  };
  allergens: {
    data: {[key: number]: allergenType};
  };
}

export const selectRecipesNormalize = (state: RootStateRecipes) =>
  state.recipes.data;
export const selectRecipes = (state: RootStateRecipes) =>
  unNormalizeState(state.recipes.data);

export const selectRecipesFormatDropDown = (
  state: RootStateRecipes,
  foodTypeFilter?: number,
): recipeFormatDrownType[] => {
  const recipes: recipeFormatDrownType[] = [];
  Object.keys(state.recipes.data).forEach((id: string) => {
    const allergensAccum: number[] = [];
    const allergens: number[] = Array.from(
      new Set([
        ...state.recipes.data[Number(id)].ingredients.reduce((acc, curr) => {
          if (state.ingredients.data[curr]?.allergen) {
            acc.push(
              state.allergens.data[
                state.ingredients.data[curr].allergen as number
              ].id,
            );
          }
          return acc;
        }, allergensAccum),
      ]),
    );
    const recipe = {
      value: Number(id),
      label: state.recipes.data[Number(id)].name,
      ingredients: state.recipes.data[Number(id)].ingredients.map(
        idIngredient => ({
          value: state.ingredients.data[idIngredient].id,
          label: state.ingredients.data[idIngredient].name,
        }),
      ),
      allergens,
    };
    if (typeof foodTypeFilter !== 'number') {
      recipes.push(recipe);
    } else if (
      state.recipes.data[Number(id)].ingredients.some(
        (idIngredient: number) =>
          state.ingredients.data[idIngredient].foodType === foodTypeFilter,
      )
    ) {
      recipes.push(recipe);
    }
  });
  return recipes;
};

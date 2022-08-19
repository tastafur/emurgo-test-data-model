import {recipeType} from '../models/recipe';
import {ingredientType} from '../models/ingredient';
import {pizzaType} from '../models/pizza';

//Get or Add calories
export const addCaloriesToPizzas = (
  pizzas: pizzaType[],
  recipes: {[key: number]: recipeType},
  ingredients: {[key: number]: ingredientType},
): pizzaType[] =>
  pizzas.map(pizza => {
    const ingredientsPizza = recipes[pizza.recipe].ingredients;
    const calories = ingredientsPizza.reduce(
      (acc, curr) => acc + ingredients[curr].calories,
      0,
    );
    return {
      ...pizza,
      calories,
    };
  });

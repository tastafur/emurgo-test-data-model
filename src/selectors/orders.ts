import {orderTypeWithCalories} from '../models/order';
import {pizzaType} from '../models/pizza';
import {recipeType} from '../models/recipe';

interface RootState {
  orders: {
    data: {[key: number]: orderTypeWithCalories};
  };
  pizzas: {
    data: {[key: number]: pizzaType};
  };
  recipes: {
    data: {[key: number]: recipeType};
  };
}

export const selectOrders = (state: RootState) =>
  Object.keys(state.orders.data).map((id: string) => {
    const pizzasRaw = state.orders.data[Number(id)].pizzas as number[];
    const accumPizzas: {pizzas: string[]; calories: number} = {
      pizzas: [],
      calories: 0,
    };
    const pizzasData = pizzasRaw.reduce((acc, idPizza) => {
      acc.pizzas.push(
        state.recipes.data[state.pizzas.data[idPizza as number].recipe].name,
      );
      acc.calories =
        acc.calories + state.pizzas.data[idPizza as number].calories;
      return acc;
    }, accumPizzas);
    return {
      ...state.orders.data[Number(id)],
      pizzas: pizzasData.pizzas,
      caloriesTotal: pizzasData.calories,
    };
  });

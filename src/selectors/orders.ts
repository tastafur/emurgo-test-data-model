import {orderType} from '../models/order';
import {pizzaType} from '../models/pizza';
import {recipeType} from '../models/recipe';

interface RootState {
  orders: {
    data: {[key: number]: orderType};
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
    return {
      ...state.orders.data[Number(id)],
      pizzas: [
        state.orders.data[Number(id)].pizzas.map(
          (idPizza: number) =>
            state.recipes.data[state.pizzas.data[idPizza].recipe].name,
        ),
      ],
    };
  });

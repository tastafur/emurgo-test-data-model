import {pizzaType} from '../models/pizza';

import {unNormalizeState} from '../utils/store';

interface RootState {
  pizzas: {
    data: {[key: number]: pizzaType};
  };
}

export const selectPizzas = (state: RootState) =>
  unNormalizeState(state.pizzas.data);

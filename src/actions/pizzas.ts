import {pizzaType} from '../models/pizza';

export const SET_PIZZAS = 'SET_PIZZAS';
export const SET_PIZZA = 'SET_PIZZA';
export const FETCH_PIZZAS = 'FETCH_PIZZAS';

export function fetchPizzas() {
  return {
    type: FETCH_PIZZAS,
  };
}

export function setPizzas(pizzas: pizzaType[]) {
  return {
    type: SET_PIZZAS,
    payload: {
      pizzas,
    },
  };
}

export function setPizza(pizza: pizzaType) {
  return {
    type: SET_PIZZA,
    payload: {
      pizza,
    },
  };
}

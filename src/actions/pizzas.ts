import {pizzaType} from '../models/pizza';

import {createAction} from '@reduxjs/toolkit';

export const SET_PIZZAS = 'SET_PIZZAS';
export const SET_PIZZA = 'SET_PIZZA';
export const FETCH_PIZZAS = 'FETCH_PIZZAS';

export const fetchPizzas = createAction(FETCH_PIZZAS);

export const setPizzas = createAction(SET_PIZZAS, (pizzas: pizzaType[]) => ({
  payload: {
    pizzas,
  },
}));

export const setPizza = createAction(SET_PIZZA, (pizza: pizzaType) => ({
  payload: {
    pizza,
  },
}));

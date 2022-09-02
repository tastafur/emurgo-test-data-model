import {createReducer} from '@reduxjs/toolkit';

import {setPizza, setPizzas} from '../actions/pizzas';
import {cleanOrdersAndPizzas} from '../actions/clean';

import {normalizeState} from '../utils/store';
import {pizzaType} from '../models/pizza';

const initialsPizzas: {data: {[key: number]: pizzaType}} = {
  data: {},
};

export const pizzas = createReducer(initialsPizzas, builder => {
  builder
    .addCase(setPizzas, (state, action) => {
      state.data = normalizeState(action.payload.pizzas);
    })
    .addCase(setPizza, (state, action) => {
      const {id} = action.payload.pizza;
      state.data[id] = action.payload.pizza;
    })
    .addCase(cleanOrdersAndPizzas, state => {
      state.data = initialsPizzas.data;
    });
});

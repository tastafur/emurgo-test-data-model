import {createReducer} from '@reduxjs/toolkit';

import {setOrder, setOrders} from '../actions/orders';
import {cleanOrdersAndPizzas} from '../actions/clean';

import {normalizeState} from '../utils/store';
import {orderType} from '../models/order';

const initialsOrders: {data: {[key: number]: orderType}} = {
  data: {},
};

export const orders = createReducer(initialsOrders, builder => {
  builder
    .addCase(setOrders, (state, action) => {
      state.data = normalizeState(action.payload.orders);
    })
    .addCase(setOrder, (state, action) => {
      const {id} = action.payload.order;
      state.data[id] = action.payload.order;
    })
    .addCase(cleanOrdersAndPizzas, state => {
      state.data = initialsOrders.data;
    });
});

import {orderType} from '../models/order';
import {pizzaType} from '../models/pizza';

import {createAction} from '@reduxjs/toolkit';

export const SET_ORDERS = 'SET_ORDERS';
export const SET_ORDER = 'SET_ORDER';
export const FETCH_ORDERS = 'FETCH_ORDERS';
export const ADD_ORDER = 'ADD_ORDER';

export const fetchOrders = createAction(FETCH_ORDERS);

export const addOrder = createAction(
  ADD_ORDER,
  (order: orderType, pizza: pizzaType) => ({
    payload: {
      order,
      pizza,
    },
  }),
);

export const setOrders = createAction(SET_ORDERS, (orders: orderType[]) => ({
  payload: {
    orders,
  },
}));

export const setOrder = createAction(SET_ORDER, (order: orderType) => ({
  payload: {
    order,
  },
}));

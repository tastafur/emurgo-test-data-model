import {orderType} from '../models/order';
import {pizzaType} from '../models/pizza';

export const SET_ORDERS = 'SET_ORDERS';
export const SET_ORDER = 'SET_ORDER';
export const FETCH_ORDERS = 'FETCH_ORDERS';
export const ADD_ORDER = 'ADD_ORDER';

export function fetchOrders() {
  return {
    type: FETCH_ORDERS,
  };
}

export function addOrder(order: orderType, pizza: pizzaType) {
  return {
    type: ADD_ORDER,
    payload: {
      order,
      pizza,
    },
  };
}

export function setOrders(orders: orderType[]) {
  return {
    type: SET_ORDERS,
    payload: {
      orders,
    },
  };
}

export function setOrder(order: orderType) {
  return {
    type: SET_ORDER,
    payload: {
      order,
    },
  };
}

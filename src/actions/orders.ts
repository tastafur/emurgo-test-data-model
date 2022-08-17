import {orderType} from '../models/order';

export const SET_ORDER = 'SET_ORDER';

export function setOrder(order: orderType) {
  return {
    type: SET_ORDER,
    payload: {
      order,
    },
  };
}

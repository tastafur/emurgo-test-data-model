import {SET_ORDER, SET_ORDERS} from '../actions/orders';
import {CLEAN_ORDERS_AND_PIZZAS} from '../actions/clean';

import {normalizeState} from '../utils/store';

const initialsOrders = {
  data: {},
};

export function orders(
  state = initialsOrders,
  {type, payload}: {type: string; payload: any},
) {
  switch (type) {
    case SET_ORDER:
      return {
        data: {
          ...state.data,
          [payload.order.id]: {
            ...payload.order,
          },
        },
      };
    case SET_ORDERS:
      return {
        data: {
          ...normalizeState(payload.orders),
        },
      };
    case CLEAN_ORDERS_AND_PIZZAS:
      return initialsOrders;
    default:
      return state;
  }
}

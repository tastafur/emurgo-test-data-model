import {SET_ORDER} from '../actions/orders';

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
    default:
      return state;
  }
}

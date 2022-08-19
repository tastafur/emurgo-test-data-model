import {SET_PIZZAS} from '../actions/pizzas';
import {CLEAN_ORDERS_AND_PIZZAS} from '../actions/clean';
import {normalizeState} from '../utils/store';

const initialsPizzas = {
  data: {},
};

export function pizzas(
  state = initialsPizzas,
  {type, payload}: {type: string; payload: any},
) {
  switch (type) {
    case SET_PIZZAS:
      return {
        data: {
          ...normalizeState(payload.pizzas),
        },
      };
    case CLEAN_ORDERS_AND_PIZZAS:
      return initialsPizzas;
    default:
      return state;
  }
}

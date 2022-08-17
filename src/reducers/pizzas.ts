import {SET_PIZZAS} from '../actions/pizzas';
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
    default:
      return state;
  }
}

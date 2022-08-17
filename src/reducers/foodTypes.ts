import {SET_FOOD_TYPES} from '../actions/foodTypes';
import {normalizeState} from '../utils/store';

const initialsFoodTypes = {
  data: {},
};

export function foodTypes(
  state = initialsFoodTypes,
  {type, payload}: {type: string; payload: any},
) {
  switch (type) {
    case SET_FOOD_TYPES:
      return {
        data: {
          ...normalizeState(payload.foodTypes),
        },
      };
    default:
      return state;
  }
}

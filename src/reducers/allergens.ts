import {SET_ALLERGENS} from '../actions/allergens';
import {normalizeState} from '../utils/store';

const initialsAllergens = {
  data: {},
};

export function allergens(
  state = initialsAllergens,
  {type, payload}: {type: string; payload: any},
) {
  switch (type) {
    case SET_ALLERGENS:
      return {
        data: {
          ...normalizeState(payload.allergens),
        },
      };
    default:
      return state;
  }
}

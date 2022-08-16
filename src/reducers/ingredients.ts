import {SET_INGREDIENTS} from '../actions/ingredients';
import {normalizeState} from '../utils/store';

const initialsIngredients = {
  data: {},
};

export function ingredients(
  state = initialsIngredients,
  {type, payload}: {type: string; payload: any},
) {
  switch (type) {
    case SET_INGREDIENTS:
      return {
        data: {
          ...normalizeState(payload.ingredients),
        },
      };
    default:
      return state;
  }
}

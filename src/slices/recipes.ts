import {SET_RECIPES} from '../actions/recipes';
import {normalizeState} from '../utils/store';

const initialsRecipes = {
  data: {},
};

export function recipes(
  state = initialsRecipes,
  {type, payload}: {type: string; payload: any},
) {
  switch (type) {
    case SET_RECIPES:
      return {
        data: {
          ...normalizeState(payload.recipes),
        },
      };
    default:
      return state;
  }
}

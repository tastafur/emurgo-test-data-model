// Dependencies
import {combineReducers} from 'redux';

// Entities
import {orders} from './orders';
import {pizzas} from './pizzas';

import {recipes} from './recipes';
import {ingredients} from './ingredients';
import {foodTypes} from './foodTypes';
import {allergens} from './allergens';

export default combineReducers({
  orders,
  pizzas,
  recipes,
  ingredients,
  foodTypes,
  allergens,
});

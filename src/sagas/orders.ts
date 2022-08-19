import {put, call, select} from 'redux-saga/effects';
import {ADD_ORDER, FETCH_ORDERS, setOrder, setOrders} from '../actions/orders';

import * as Effects from 'redux-saga/effects';

const takeLatest: any = Effects.takeLatest;

import orders from '../mocks/orders.json';

import {orderType} from '../models/order';
import {pizzaType} from '../models/pizza';

import {selectRecipesNormalize} from '../selectors/recipes';
import {selectIngredientsNormalize} from '../selectors/ingredients';
import {addCaloriesToPizzas} from '../utils/pizzas';

import {setPizza} from '../actions/pizzas';
import {goBack} from '../navigationActions';

export function* fetchOrders() {
  try {
    // Show loading with a change state yield put(isLoadingOrders(true));
    /* Check if you have auth
    yield put(isAuthForCall());

    const checkAction = yield take(IS_AUTH_FINISH);

    if (checkAction.error) {
      yield cancel();
    }
    */
    // Get accessToken const token = yield select(getAccessToken);
    /* here I would make the call for service
     const allergens = yield call(getOrders, {
      baseUrl: configBase.API_BASE_URL,
      token,
      params: {
        x,
      },
    });
     */
    // Check data and save
    if (orders.length) {
      yield put(setOrders(orders));
    }
    // Hide loading with a change state yield put(isLoadingOrders(false));
  } catch (e) {
    // Hide loading with a change state yield put(isLoadingOrders(false));
    // here I would handle errors yield call(errorHandler, {payload: e});
    yield call(console.log, e);
  }
}

export function* watchFetchOrdersProcess() {
  yield takeLatest(FETCH_ORDERS, fetchOrders);
}

export function* addOrder({
  payload: {order, pizza},
}: {
  payload: {order: orderType; pizza: pizzaType};
}) {
  try {
    // Show loading with a change state yield put(isLoadingOrder(true));
    /* Check if you have auth
    yield put(isAuthForCall());

    const checkAction = yield take(IS_AUTH_FINISH);

    if (checkAction.error) {
      yield cancel();
    }
    */
    // Get accessToken const token = yield select(getAccessToken);
    /* here I would make the call for service
     const allergens = yield call(postOrder, {
      baseUrl: configBase.API_BASE_URL,
      token,
      params: {
        x,
      },
    });
     */
    // Check data and save
    if (order) {
      const recipes: any[] = yield select(selectRecipesNormalize);
      const ingredients: any[] = yield select(selectIngredientsNormalize);

      const pizzasCalorieFed = (yield call(
        addCaloriesToPizzas,
        [pizza],
        recipes,
        ingredients,
      )) as pizzaType[];

      yield put(setPizza(pizzasCalorieFed[0]));
      yield put(setOrder(order));
      yield call(goBack);
    }
    // Hide loading with a change state yield put(isLoadingOrder(false));
  } catch (e) {
    // Hide loading with a change state yield put(isLoadingOrder(false));
    // here I would handle errors yield call(errorHandler, {payload: e});
    yield call(console.log, e);
  }
}

export function* watchAddOrderProcess() {
  yield takeLatest(ADD_ORDER, addOrder);
}

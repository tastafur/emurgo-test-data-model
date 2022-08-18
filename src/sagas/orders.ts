import {takeLatest, put, call} from 'redux-saga/effects';
import {FETCH_ORDERS, setOrders} from '../actions/orders';

import orders from '../mocks/orders.json';
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

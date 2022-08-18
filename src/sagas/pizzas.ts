import {takeLatest, put, call} from 'redux-saga/effects';
import {FETCH_PIZZAS, setPizzas} from '../actions/pizzas';

import pizzas from '../mocks/pizzas.json';
export function* fetchPizzas() {
  try {
    // Show loading with a change state yield put(isLoadingPizzas(true));
    /* Check if you have auth
        yield put(isAuthForCall());

        const checkAction = yield take(IS_AUTH_FINISH);

        if (checkAction.error) {
          yield cancel();
        }
        */
    // Get accessToken const token = yield select(getAccessToken);
    /* here I would make the call for service
         const allergens = yield call(getPizzas, {
          baseUrl: configBase.API_BASE_URL,
          token,
          params: {
            x,
          },
        });
         */
    // Check data and save
    if (pizzas.length) {
      yield put(setPizzas(pizzas));
    }
    // Hide loading with a change state yield put(isLoadingPizzas(false));
  } catch (e) {
    // Hide loading with a change state yield put(isLoadingPizzas(false));
    // here I would handle errors yield call(errorHandler, {payload: e});
    yield call(console.log, e);
  }
}

export function* watchFetchPizzasProcess() {
  yield takeLatest(FETCH_PIZZAS, fetchPizzas);
}

import {takeLatest, put, call} from 'redux-saga/effects';
import {FETCH_FOOD_TYPES, setFoodTypes} from '../actions/foodTypes';

import foodTypes from '../mocks/foodTypes.json';
export function* fetchFoodTypes() {
  try {
    // Show loading with a change state yield put(isLoadingFoodTypes(true));
    /* Check if you have auth
        yield put(isAuthForCall());

        const checkAction = yield take(IS_AUTH_FINISH);

        if (checkAction.error) {
          yield cancel();
        }*/
    // Get accessToken const token = yield select(getAccessToken);
    /* here I would make the call for service
         const allergens = yield call(getFoodTypes, {
          baseUrl: configBase.API_BASE_URL,
          token,
          params: {
            x,
          },
        });
         */
    // Check data and save
    if (foodTypes.length) {
      yield put(setFoodTypes(foodTypes));
    }
    // Hide loading with a change state yield put(isLoadingFoodTypes(false));
  } catch (e) {
    // Hide loading with a change state yield put(isLoadingFoodTypes(false));
    // here I would handle errors yield call(errorHandler, {payload: e});
    yield call(console.log, e);
  }
}

export function* watchFetchFoodTypesProcess() {
  yield takeLatest(FETCH_FOOD_TYPES, fetchFoodTypes);
}

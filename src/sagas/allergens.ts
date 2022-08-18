import {takeLatest, put, call} from 'redux-saga/effects';
import {FETCH_ALLERGENS, setAllergens} from '../actions/allergens';

import allergens from '../mocks/allergens.json';
export function* fetchAllergens() {
  try {
    // Show loading with a change state yield put(isLoadingAllergens(true));
    /* Check if you have auth
    yield put(isAuthForCall());

    const checkAction = yield take(IS_AUTH_FINISH);

    if (checkAction.error) {
      yield cancel();
    }*/
    // Get accessToken const token = yield select(getAccessToken);
    /* here I would make the call for service
     const allergens = yield call(getAllergens, {
      baseUrl: configBase.API_BASE_URL,
      token,
      params: {
        x,
      },
    });
     */
    // Check data and save
    if (allergens.length) {
      yield put(setAllergens(allergens));
    }
    // Hide loading with a change state yield put(isLoadingAllergens(false));
  } catch (e) {
    // Hide loading with a change state yield put(isLoadingAllergens(false));
    // here I would handle errors yield call(errorHandler, {payload: e});
    yield call(console.log, e);
  }
}

export function* watchFetchAllergensProcess() {
  yield takeLatest(FETCH_ALLERGENS, fetchAllergens);
}

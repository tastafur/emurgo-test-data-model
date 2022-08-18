import {takeLatest, put, call} from 'redux-saga/effects';
import {FETCH_INGREDIENTS, setIngredients} from '../actions/ingredients';

import ingredients from '../mocks/ingredients.json';
export function* fetchIngredients() {
  try {
    // Show loading with a change state yield put(isLoadingIngredients(true));
    /* Check if you have auth
        yield put(isAuthForCall());

        const checkAction = yield take(IS_AUTH_FINISH);

        if (checkAction.error) {
          yield cancel();
        }*/
    // Get accessToken const token = yield select(getAccessToken);
    /* here I would make the call for service
         const allergens = yield call(getIngredients, {
          baseUrl: configBase.API_BASE_URL,
          token,
          params: {
            x,
          },
        });
     */
    // Check data and save
    if (ingredients.length) {
      yield put(setIngredients(ingredients));
    }
    // Hide loading with a change state yield put(isLoadingIngredients(false));
  } catch (e) {
    // Hide loading with a change state yield put(isLoadingIngredients(false));
    // here I would handle errors yield call(errorHandler, {payload: e});
    yield call(console.log, e);
  }
}

export function* watchFetchIngredientsProcess() {
  yield takeLatest(FETCH_INGREDIENTS, fetchIngredients);
}
